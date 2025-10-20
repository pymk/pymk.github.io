---
title: "Python and R at Work"
date: "2024-01-25"
taxonomies:
  categories: [opinion]
  tags: [python, r]
---

I really enjoy doing data wrangling and analysis in R, primarly because of the `dplyr` and its sister Tidyverse packages, like `tidyr` and `purrr`, thanks to their [wonderful API](https://dplyr.tidyverse.org/).

Over the past year, our team at work has been working on becoming language-agnostic (at least in our group), using the right tool for the right job. For example, we refactor our pipeline to use Python to be compatible with our orchestration stack (Pulumi and Dagster), but kept our data analysis in R using or Shiny apps for dashboards as it works better for us (using Posit Connect for publishing, for example).

Just to get some practice, I decided to use [Polars](https://pola.rs/) on one of the recent projects I worked on. I enjoyed the syntax more than Pandas, as it was closer to SQL and `dplyr`. I liked it a lot, but felt a bit verbose for my taste. Still, it was great getting some hands on experience with this library and get a better sense of its advantages and shortcomings.

Just today, I was reminded of the [Ibis](https://ibis-project.org/) library, which I had heard about a few months back at the Posit Conference. Checking it out today, I am very excited to see the direction they are taking: the API, interactive mode, lazy expressions, DuckDB backend, etc.

It definitely checks all the boxes for me, so I am very excited to give this a try on upcoming projects and reports.
