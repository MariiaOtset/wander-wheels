# Wander Wheels

A premium campervan discovery and trip-planning experience built with React. A portfolio demonstration of a travel rental interface, with a curated homepage, searchable vehicle catalog, immersive camper details, saved favourites and an illustrative booking calculator.

**Live original:** https://wander-wheels-two.vercel.app/

## Features

- Editorial travel homepage with a destination quick search and dynamically loaded featured campers
- Filter campervans by location, vehicle type, and amenities
- Sort results by price or rating, with active filter chips and pagination
- Save campervans to a dedicated favourites page (Redux Persist, stored on this device)
- Immersive camper detail view with keyboard-accessible image lightbox, features, and reviews
- Select dates and calculate an estimated trip price using a no-payment demo planner
- Fully responsive layout across mobile, tablet, and desktop

**Important:** Booking is a demonstration only. No reservation is created, no availability is checked, and no payment is processed. Camper data is bundled with the frontend so browsing works without an external data API.

## Stack

React 18 · Vite · React Router · Redux Toolkit · Redux Persist · Axios · Formik · Yup · CSS Modules

## Run locally

```bash
npm ci
npm run dev
```

To verify the production bundle:

```bash
npm run build
npm run lint
```

The original remote MockAPI used by the assignment could leave the catalogue empty when it returned errors. The app now uses a locally bundled inventory of **22 demo campers** (the 13 original GoIT starter records, adapted for the UI, plus 9 new illustrative additions). Filtering, sorting, pagination and details run locally and do not depend on MockAPI availability.

## Portfolio notes

This feature branch contains the portfolio modernization. Review and test it before merging into `main` and updating the deployed site. Original live demo may not yet display these changes.

Designed and developed by [Mariia Otset](https://github.com/MariiaOtset).

## V2 — compare campers and travel inspiration

- Select up to three campers from catalog cards or detail pages and compare nightly prices (per day), vehicle type, guest rating and essential features side-by-side.
- Selected comparisons persist in the current browser via localStorage; clear or remove campers at any time.
- Browse campers from the homepage by travel style (compact van, comfort features or automatic transmission). Links use the existing catalog filter parameters.
- The comparison is a discovery aid: prices are indicative and no live booking or availability is checked.

**Branch workflow:** this V2 branch is based on the unmerged `feat/portfolio-redesign-v1` branch. Review V1 + V2 before merging to `main`.

## Catalogue reliability and filter coverage

- The first 13 camper IDs are retained so existing favourite/detail links can still resolve; 9 additional camper profiles cover every vehicle type.
- All eleven selectable amenities and all four vehicle types have matching listings, including a fully equipped example per type so combinations work.
- Client-side filtering supports case-insensitive destination search and exact vehicle/amenity matching; unrelated cities or contradictory criteria can still return an honest empty state.
- Sorting and pagination work against the full bundled collection. The homepage featured collection uses the same inventory.
- Run `npm test` for coverage checks, plus `npm run build` and `npm run lint`.

**Image and data provenance:** the first 13 names and vehicle specs are based on the original GoIT Travel Trucks exercise sample records. Photo URLs point to the GoIT camper image archive, with a fallback image for network failures. All descriptions, prices, reviews and new curated listings are illustrative examples, not claims about actual vehicles or ratings.
