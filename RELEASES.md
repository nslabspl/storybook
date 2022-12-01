# Release Process

A Storybook release process based on [Semver](http://semver.org/). In short just merge all PRs into `dev`, which is the default branch.

## Motivation

During the Storybook 3.x transition we've undergone a series of growing pains as we've opened up the development process. We've had questions about:

1. how to adhere to `semver`?
2. how to do marketing releases (while adhering to `semver`)?
3. how to introduce significant new features (e.g. `vue` support, story hierarchy)?
4. how to converge on key design decisions (e.g. new addons API)?
5. how to schedule releases?
6. how to maintain quality/stability through the process?
7. how to pay down tech debt as we go?

This process attempts to address all these concerns in one go.

## Semver

[Semver](http://semver.org/) dictates three types of release:

1. *MAJOR* version when you make incompatible API changes,
2. *MINOR* version when you add functionality in a backwards-compatible manner, and
3. *PATCH* version when you make backwards-compatible bug fixes.

We'll do our best to adhere to Semver.

## PATCH releases

Every bugfix should go out as soon as we've verified the fix, and based on the
current rate of contribution, we should be issuing PATCH releases weekly.
Eventually, we'll automate the process so that a release will go out every time a PR is
merged into `dev`, and we've already laid most of the groundwork for this.

## MINOR releases

Every new feature, particularly significant ones (e.g. Vue support, deep
hierarchy for stories) deserves more attention:

1. They should be well-tested by the community before we release.
2. They often have architectural implications for the entire Storybook ecosystem, so should be discussed thoroughly before release. Doing `alpha` releases allow us to test in the community without necessarily achieving agreement.
3. They often deserve proper marketing treatment (blog posts, release announcement, podcast, etc.)

## MAJOR releases

(To be added)

## Blocking bugs

Most `PATCH` releases come from community members, who generously fix problems as
they come up. However, there are also bugs that never get picked up and just sit
there gathering upvotes and "me too" comments. We need a way to make sure that
these bugs get addressed.

For every non-PATCH release, we nominate a small number of bugs that must be addressed before a release can go out by adding them to the milestone.
Adding bugs to the milestone helps people looking for good ways to contribute, or to understand what is blocking the release so they can actually do something
about it.

The best way to make sure a bug gets addressed quickly is to fix it yourself and issue a PR. If the fix adheres to all rules, we'll try to release it quickly.

## Discussing changes

For all three types of changes, all discussion can occur in respective issue/PR.