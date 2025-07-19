# SVGFromResource

This is simple lightning component to get svg from static resource and use it as real svg

# lightning-svg-from-resource

A Salesforce Lightning Aura component for rendering SVG images directly from Salesforce static resources.

## Features

- Dynamically loads SVG markup from a static resource.
- Renders the SVG inline within your Lightning page.
- Displays error messages if the resource is missing or cannot be loaded.
- Allows custom CSS classes.

## Installation

### 1. Clone the Repository

```sh
git clone https://github.com/vad1m198/lightning-svg-from-resource.git
cd lightning-svg-from-resource/src
```

### 2. Deploy to Salesforce

Make sure you have [Salesforce CLI (sfdx)](https://developer.salesforce.com/tools/sfdxcli) installed and are authenticated to your org.

```sh
sfdx force:mdapi:deploy -d . -u [YOUR_ORG_ALIAS] -w -1
```
Replace `[YOUR_ORG_ALIAS]` with your Salesforce org alias or username.

To deploy to salesforce org clone repository and deploy it to destination org using Force.com IDE or Migration tool or use deploy to salesforce button
<a href="https://githubsfdeploy.herokuapp.com/app/githubdeploy/vad1m198/lightning-svg-from-resource?ref=master">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

### 3. Upload SVG as a Static Resource

1. Go to **Setup > Static Resources** in Salesforce.
2. Click **New**.
3. Upload your SVG file and set the **Name** (e.g., `employee2`).

## Usage

Add the component to your Lightning App Builder page, another Aura component, or Lightning application:

```xml
<c:SVGFromResource resourceName="employee2" class="my-custom-style"/>
```

- `resourceName` — The name of your static resource (without `.svg` extension).
- `class` — (Optional) Custom CSS class for the container.

## Example

If you uploaded a static resource named `employee2`:

```xml
<c:SVGFromResource resourceName="employee2"/>
```

## Error Handling

If the static resource cannot be found or loaded, an error message will be displayed in the component.

## License

[MIT](LICENSE) (Add a LICENSE file if you want to specify a license.)

---

**For more details, see the source code or open an issue.**

