---
title: "Software Design"
date: "2023-01-07"
taxonomies:
  categories: [tech]
  tags: [notes]
---

Found this great book called *A Philosophy of Software Design* by John Ousterhout and I am thoroughly enjoying it. I will use this post to write down my notes and summary to help retain the information.

### Code Complexity

A complex code can be identified by the amount of time the developer has to spend learning and understanding the code ("cognitive load") in order to make even simple changes. An example would be when making a simple update requires a lot of code modification throughout the code base. Or when updating part of the code unintentionally changes or breaks something else.

In order to reduce complexity, we can do a few things:

1. Having a simpler code by writing obvious code vs a clever, more complex ones
2. Reduce special cases, which helps reduce cognitive load
3. Abstractions and encapsulation of complexities, so developers are only expose to it when needed

Complexities are introduced incrementally, so a "zero tolerance" philosophy (more on this later) is required to stay vigilant. The two main culprits of code complexity are *dependencies* and *obscurity*. An example of dependency would be when a piece of code cannot be modified without having to update other code pieces and making changes. An example of obscurity would be lack of documentation or when important information in the code is not obvious.

Instead of quickly pushing out code just to get the job done or meet a deadline (and accumulate technical debt), we should spend some time to come up with a design for the system. Think through a few alternative approaches before deciding the right one. When mistakes are identified, they should be fixed rather than patched around it.

### Modular Design and Abstractions

Modular design is a way of breaking down a system into smaller parts. Abstraction is a way to hide away unimportant information or details that allow for easier understanding of the system.

Ideally, each module should be independent of the other ones, so the complexities of a given module are self-contained. But interactivity and dependencies between modules are unavoidable, so the goal should be to minimize these dependencies.

When creating a model, we should think about the *interface* (what it does) and *implementation* (how it does it) of the module. The module's interface should be simple to reduce complexity of the overall system. We should also create "deep" module/classes/functions (powerful functionality, but simple interface) rather than "shallow" ones (complex interface, but simple functionality).

### Design it Twice

Rather than implementing the first idea that comes to your head, spend some time and think about alternative approaches. For a more complex system, make a list of pros and cons. This should be applied to system, modules, or functions. It is better to spend some time up front to think about the design instead of spending days or weeks refactoring a bad design.
