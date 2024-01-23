---
title: "xkcdr package"
date: "2022-12-28"
taxonomies:
  categories: [code]
  tags: [code, r]
---

I wanted to get more practice using the [{covr}](https://covr.r-lib.org) package, so I built a small R package that uses the _xkcd_ comic's API.

You can install the package from Github:

```r
pak::pak("pymk/xkcdr")
```

There is only one exported function for this package: `get_xkcd()`. There is an optional parameter that can be passed to get a specific comic. Without it, the latest comic will be returned.

What is returned is a {gt} table, which looks very polished as an HTML output.

For example, to view the comic 936, "Password Strength", we run:

```r
xkcdr::get_xkcd(936)
```

Source: [pymk/xkcdr](https://github.com/pymk/xkcdr)