---
title: "subscriptions 2023"
date: "2023-01-01"
taxonomies:
  categories: [update]
  tags: [code, r, subscriptions]
---

I thought to start the year right and make a budget.

Subscriptions are sneaky...

|Description     |Category      | Amount|
|:---------------|:-------------|------:|
|iCloud          |Technology    |     $1|
|NextDNS         |Technology    |     $2|
|1Password       |Technology    |     $3|
|Simple Login    |Technology    |     $3|
|Firefox Relay   |Technology    |     $5|
|Mullvad VPN     |Technology    |     $5|
|Google Domains  |Technology    |    $10|
|Kagi            |Technology    |    $10|
|HBO Max         |Entertainment |    $15|
|YouTube Premium |Entertainment |    $15|
|Netflix         |Entertainment |    $20|
|Pet Insurance   |Insurance     |    $40|
|Internet        |Utilities     |    $50|
|Google Fi       |Utilities     |    $55|
|Car Insurance   |Insurance     |   $140|
|Total           |-             |   $374|

Source:

```r
# R
tibble::tribble(
  ~Description, ~Category, ~Amount,
  "NextDNS", "Technology", 2,
  "1Password", "Technology", 3,
  "Car Insurance", "Insurance", 140,
  "Firefox Relay", "Technology", 5,
  "Google Domains", "Technology", 10,
  "Google Fi", "Utilities", 55,
  "HBO Max", "Entertainment", 15,
  "iCloud", "Technology", 1,
  "Internet", "Utilities", 50,
  "Kagi", "Technology", 10,
  "Mullvad VPN", "Technology", 5,
  "Netflix", "Entertainment", 20,
  "Pet Insurance", "Insurance", 40,
  "Simple Login", "Technology", 3,
  "YouTube Premium", "Entertainment", 15
) |>
  dplyr::arrange(Amount) |>
  janitor::adorn_totals("row") |>
  dplyr::mutate(Amount = paste0("$", Amount)) |>
  knitr::kable(align = c("l", "l", "r"))
```
