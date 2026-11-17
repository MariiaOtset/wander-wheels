import test from "node:test";
import assert from "node:assert/strict";
import {campers} from "./campers.js";
import {findCamper,selectCamperPage} from "./camperQueries.js";
import {equipmentOptions,vehicleTypeOptions} from "../constants/index.js";
import {toCamelCase} from "../utils/toCamelCase.js";
const paramsByOption={Automatic:{transmission:"automatic"},Petrol:{engine:"petrol"},Shower:{bathroom:"true"}};
const lower=o=>o==="AC"||o==="TV"?o:o.toLowerCase();
test("restores original 13 camper IDs and adds 9 new listings",()=>{
 assert.equal(campers.length,22);
 assert.deepEqual(campers.slice(0,13).map(c=>c.id),Array.from({length:13},(_,i)=>String(i+1)));
 assert.ok(campers.slice(13).every(c=>Number(c.id)>13));
 assert.equal(new Set(campers.map(c=>c.id)).size,campers.length);
});
test("all cards have complete detail view data, photo galleries and demo feedback",()=>{
 for(const c of campers){
  assert.ok(c.name&&c.location&&c.description);
  assert.ok(c.price>0&&c.rating>0);
  assert.ok(c.gallery.length>=3&&c.gallery.every(img=>img.original.startsWith("https://")));
  assert.ok(Array.isArray(c.reviews));
  assert.equal(findCamper(c.id),c);
 }
 assert.equal(findCamper("not-a-camper"),null);
});
test("every visible amenity filter returns campers",()=>{
 for(const label of equipmentOptions){
  const params=paramsByOption[label]||{[lower(label)]:"true"};
  const result=selectCamperPage(params);
  assert.ok(result.total>0,label+" must not be empty");
 }
});
test("every vehicle type is represented and can combine all amenities",()=>{
 for(const label of vehicleTypeOptions){
  const form=toCamelCase(label);
  assert.ok(selectCamperPage({form}).total>0,form+" must not be empty");
  const everything={form,transmission:"automatic",engine:"petrol",AC:"true",bathroom:"true",kitchen:"true",TV:"true",radio:"true",refrigerator:"true",microwave:"true",gas:"true",water:"true"};
  assert.ok(selectCamperPage(everything).total>0,form+" must support even the full amenity combination");
 }
});
test("location queries are case insensitive; unrelated places legitimately have no match",()=>{
 assert.ok(selectCamperPage({location:"lVIV"}).total>0);
 assert.equal(selectCamperPage({location:"Atlantis"}).total,0);
});
test("pagination and sorting are consistent",()=>{
 const first=selectCamperPage({page:1}),second=selectCamperPage({page:2}),end=selectCamperPage({page:5});
 assert.equal(first.total,22);assert.equal(first.items.length,5);assert.equal(second.items.length,5);assert.equal(end.items.length,2);
 assert.ok(!first.items.some(c=>second.items.some(d=>d.id===c.id)));
 const low=selectCamperPage({sortBy:"price",order:"asc",limit:50}).items;
 const high=selectCamperPage({sortBy:"rating",order:"desc",limit:50}).items;
 assert.ok(low.every((c,i)=>i===0||low[i-1].price<=c.price));
 assert.ok(high.every((c,i)=>i===0||high[i-1].rating>=c.rating));
});

test("all camper pages have five distinct notes with no placeholder preamble",()=>{
 for(const camper of campers){
  assert.equal(camper.reviews.length,5,camper.name);
  assert.equal(new Set(camper.reviews.map(review=>review.comment)).size,5,camper.name);
  for(const review of camper.reviews){
   assert.ok(review.reviewer_name.length>1);
   assert.ok(review.reviewer_rating>=1&&review.reviewer_rating<=5);
   assert.ok(!/Illustrative guest feedback|Illustrative review|Sample guest/i.test(review.comment),camper.name);
  }
 }
});
