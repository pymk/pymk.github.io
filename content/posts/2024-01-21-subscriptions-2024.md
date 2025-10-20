---
title: "Subscriptions 2024"
date: "2024-01-21"
taxonomies:
  categories: [private]
  tags: [r, code, subscriptions]
---

Here's the updated subscription table from last year.

|Description     |Category      | Amount|
|:---------------|:-------------|------:|
|Domain Name     |Technology    |     $1|
|Firefox Relay   |Technology    |     $1|
|iCloud          |Technology    |     $1|
|1Password       |Technology    |     $3|
|Mullvad VPN     |Technology    |     $5|
|Github Copilot  |Technology    |     $8|
|Kagi            |Technology    |    $10|
|YouTube Premium |Entertainment |    $15|
|HBO Max         |Entertainment |    $16|
|Netflix         |Entertainment |    $23|
|Pet Insurance   |Insurance     |    $40|
|Internet        |Utilities     |    $50|
|Phone           |Utilities     |    $55|
|Car Insurance   |Insurance     |   $140|
|Total           |-             |   $368|

Source:

```r
# R
tibble::tribble(
  ~Description, ~Category, ~Amount,
  "1Password", "Technology", 3,
  "Car Insurance", "Insurance", 140,
  "Domain Name", "Technology", 1,
  "Firefox Relay", "Technology", 1,
  "Github Copilot", "Technology", 8,
  "HBO Max", "Entertainment", 16,
  "iCloud", "Technology", 1,
  "Internet", "Utilities", 50,
  "Kagi", "Technology", 10,
  "Mullvad VPN", "Technology", 5,
  "Netflix", "Entertainment", 23,
  "Pet Insurance", "Insurance", 40,
  "Phone", "Utilities", 55,
  "YouTube Premium", "Entertainment", 15
) |>
  dplyr::arrange(Amount) |>
  janitor::adorn_totals("row") |>
  dplyr::mutate(Amount = paste0("$", Amount)) |>
  knitr::kable(align = c("l", "l", "r"))
```
