# Select Once Per Table

Adds an setting to "select" columns in a ProFields Table field so that each option can only be selected once per table. Requires the [ProFields](https://processwire.com/store/pro-fields/) Table module.

There could be a number of situations where this module might be useful, but perhaps the primary situation is when you want to store extra information for pages that are selected in a Page Reference field.

So instead of using a Page Reference field like this...

![Without SelectOncePerTable](https://user-images.githubusercontent.com/1538852/146096627-3a4aa460-101d-4d1e-9d26-d275cb231843.png)

...you could use a ProFields Table field together with Select Once Per Table to store extra information for each selected page like this...

![With SelectOncePerTable](https://user-images.githubusercontent.com/1538852/146096639-e49ade2f-8014-4226-bd37-f47f4bc8e561.png)

The module ensures that pages/options that are already selected in the Table field are disabled as you add new rows or edit existing rows.

## Configuration

To enable the module for any "Page (Select)" or "Select" column in your Table field, edit the column settings and add `selectOnce=1`.

![SelectOncePerTable configuration](https://user-images.githubusercontent.com/1538852/146096637-4c6ba047-5c46-4921-8a14-125de56bdd9a.png)
