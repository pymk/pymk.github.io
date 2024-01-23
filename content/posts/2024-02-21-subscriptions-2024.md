---
title: "subscriptions 2024"
date: "2024-02-21"
taxonomies:
  categories: [update]
  tags: [r, code, subscriptions]
---

Here's the updated subscription table from last year. The `Amount` is price per month.

|Description     |Category      | Amount|
|:---------------|:-------------|------:|
|Domain          |Technology    |     $1|
|iCloud          |Technology    |     $1|
|1Password       |Technology    |     $3|
|Simple Login    |Technology    |     $3|
|Firefox Relay   |Technology    |     $5|
|Mullvad VPN     |Technology    |     $5|
|Kagi            |Technology    |    $10|
|HBO Max         |Entertainment |    $16|
|YouTube Premium |Entertainment |    $15|
|Netflix         |Entertainment |    $23|
|Pet Insurance   |Insurance     |    $40|
|Internet        |Utilities     |    $50|
|Phone           |Utilities     |    $55|
|Car Insurance   |Insurance     |   $140|
|Total           |-             |   $367|

Source:

```r
# R
tibble::tribble(
  ~Description, ~Category, ~Amount,
  "1Password", "Technology", 3,
  "Car Insurance", "Insurance", 140,
  "Firefox Relay", "Technology", 5,
  "Domain", "Technology", 1,
  "Phone", "Utilities", 55,
  "HBO Max", "Entertainment", 16,
  "iCloud", "Technology", 1,
  "Internet", "Utilities", 50,
  "Kagi", "Technology", 10,
  "Mullvad VPN", "Technology", 5,
  "Netflix", "Entertainment", 23,
  "Pet Insurance", "Insurance", 40,
  "Simple Login", "Technology", 3,
  "YouTube Premium", "Entertainment", 15
) |>
  dplyr::arrange(Amount) |>
  janitor::adorn_totals("row") |>
  dplyr::mutate(Amount = paste0("$", Amount)) |>
  knitr::kable(align = c("l", "l", "r"))
```
