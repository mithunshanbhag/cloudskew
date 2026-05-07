# Frequently asked questions

## Pricing and subscription plans

### Why am I being redirected to stripe.com for payments?

For simplified & secure billing, CloudSkew has partnered with [Stripe](https://www.stripe.com/), one of the world's leading online payment processors. CloudSkew's billing & customer portals are hosted on stripe.com.

### How do I cancel my subscription?

Please refer to the `cancellation` section of our [terms of service](./../about/terms-of-service.md#cancellation-and-refunds).

Also, email us at support@cloudskew.com if you need any assistance.

### Why doesn't the billing portal support American Express cards?

CloudSkew (Skewed Ventures Private Limited) is based in India. Currently, Stripe restricts the usage of American Express cards for India-based businesses ([details](https://support.stripe.com/questions/american-express-card-support-for-india-based-businesses)).

### Why can't users in India purchase subscriptions yet?

CloudSkew (Skewed Ventures Private Limited) is based in India. Stripe (our online payment processor) platform has different integrations & rules for payments from domestic (India-based) and international users. That said, support for India-based users is being added and should become available in a couple of sprints.

## Early adopter plan

### Why have I been moved to the EARLY ADOPTER plan?

All early adopters of CloudSkew with more than 3 diagrams (or more than 3 templates) have automatically been grandparented into the EARLY ADOPTER plan. This plan is exactly the same as the PROFESSIONAL plan but free of cost.

However, this plan expires on June 30th, 2021. So for the next six months, you can continue to enjoy all the benefits of the PROFESSIONAL plan for free.

### What happens after my early adopter plan expires?

You'll be automatically moved to the FREE plan. After this, you'll still be able to edit, print, export, share all your existing diagrams. However, you won't be able to create any new ones until you upgrade to the PROFESSIONAL plan.

## Product usage

### Why can't I resize or reorient the diagram canvas?

Currently CloudSkew supports multi-page diagrams on an infinitely large canvas. However each page is of A4 size (210 x 297 millimeters or 8.27 x 11.69 inches) and in landscape mode.

Custom diagram sizes and orientations will be enabled in a future release.

### Why can't I use the app without logging in?

The diagrams are auto-saved to CloudSkew's back-end, which requires users to be logged in. Auto-save was a convenience feature requested by many of the initial test users.

Also, some upcoming features (checkpoints, restoring from checkpoints etc) will require users to be authenticated.

### When I export my diagram as a PNG file, why does it have a dark background?

By default, PNG images have transparent backgrounds.

* If you have turned on dark mode on your OS, the image viewer will display this transparent background as a dark/black background.
* If you have have light mode on your OS, the image viewer will display this transparent background as a light/white background.

Regardless, the background is still transparent and this can be verified by importing the PNG file into an existing document, image or slide/presentation.

More details about enabling & disabling dark modes for your operating system: [windows](https://support.microsoft.com/en-us/windows/change-colors-in-windows-d26ef4d6-819a-581c-1581-493cfcc005fe) | [linux](https://www.howtogeek.com/669755/how-to-enable-dark-mode-on-ubuntu-20.04-lts/) | [mac](https://support.apple.com/en-in/HT208976).

## Product roadmap

### Any plans to auto-generate diagrams from existing infrastructure?

Not in the [near-term future](./features.md#planned-features).

### Any plans to create an offline (desktop) version of this app?

Not in the [near-term future](./features.md#planned-features).

### Any plans to create a team/enterprise version of this app?

[Yes, there are plans](./features.md#planned-features).

### Any plans to create a VSCode extension?

Not in the [near-term future](./features.md#planned-features).

### Any plans to export diagrams as deployable scripts (ARM, CloudFormation, Terraform)?

Not in the [near-term future](./features.md#planned-features).

### Any plans to improve the experience on mobile devices?

No plans. The web app is best used on laptops and desktops (screen resolutions higher than 960 x 540, landscape mode).

### Any plans to make the app work correctly in Internet Explorer (IE)?

To be honest, I haven't tested it in IE. No plans to add support for IE since it is [now deprecated](https://support.microsoft.com/en-in/help/17454/lifecycle-faq-internet-explorer).

## Miscellaneous

### How do I make my diagrams "pop"?

Do the following:

* Change color of the rectangle shapes to something that contrasts the icons inside it.
* Reduce the opacity of the rectangle shapes to (say) 40% or 50%.

### How do I report a bug?

Please report it [here](https://github.com/cloudskew/cloudskew/issues/new/choose).

### Is this an open source project?

No. However, would love to open source parts of it in the future to invite community contributions around:

* icons from different cloud providers.
* templates for some frequently created diagrams.

However not there yet, lot of features have to be added before all this can be enabled.

### What does the CloudSkew architecture look like?

Take a [look](../about/cloudskew-architecture.md).
