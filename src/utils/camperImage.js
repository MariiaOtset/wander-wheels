/* Fallback for gallery photos hosted by GoIT, which may become temporarily unavailable. */
const fallback="https://images.unsplash.com/photo-1677186694009-304c3588cbfc?auto=format&fit=crop&w=1400&q=82";
export function handleCamperImageError(event){
 const img=event.currentTarget;
 if(img.dataset.fallbackApplied==="true")return;
 img.dataset.fallbackApplied="true";
 img.src=fallback;
}
