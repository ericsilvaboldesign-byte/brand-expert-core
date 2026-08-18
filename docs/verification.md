# Source Verification

A source record's `verification.status` may be:

| Status | Meaning |
|--------|---------|
| `verified` | Bibliographic metadata confirmed against an authoritative reference; evidence recorded. |
| `pending` | Submitted but not yet checked. Treated as **non-citable** downstream. |
| `rejected` | Failed verification (metadata could not be confirmed, or the source does not meet inclusion criteria). Kept for audit trail. |

## What verification checks

For every source: exact **title**, **author(s)**, **publisher**, and
**first-publication year** must match an authoritative reference. Identifiers
(ISBN-13, DOI) are recorded only when read directly from such a reference —
never from memory or inference. An unverified identifier is left `null`.

Acceptable authoritative references, in order of preference:

1. Publisher's own catalog page
2. Journal record (for articles) / DOI resolver
3. WorldCat or a national library catalog
4. Google Books
5. Wikipedia (fallback; acceptable for title/author/year, not for identifiers)

## Rules enforced by the validator

- `status: verified` **requires** `verified_on` (ISO date), `method`, and
  `evidence_url`.
- Any non-null `isbn_13` must pass the ISBN-13 checksum.
- Any non-null `doi` must match the DOI syntax (`10.<registrant>/<suffix>`).
- New submissions must enter as `pending`; flipping to `verified` is a review
  action, not an authoring action.

## Source tiers

| Tier | Criteria | Examples |
|------|----------|----------|
| `canonical` | Foundational works the field itself cites; peer-reviewed or decades of practitioner adoption. | Aaker, Keller, Kapferer, Ries & Trout |
| `standard` | Widely adopted practitioner references. | Wheeler, Neumeier, Johnson |
| `supplementary` | Useful but narrower, newer, or more opinion-driven. | Popularizations, industry reports |

Tiering affects downstream ranking, not inclusion: a `supplementary` source
still requires full verification.
