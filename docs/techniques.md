# Techniques

## Semantics and data properties

### Metadata

Metadata is the data that describes a dataset rather than the actual data being published. In practice the distinction is not always clear and a rich schema may define properties that both describe and form part of the data.

Metadata will describe the subject matter, status, ownership, format and quality of a dataset. The Open Knowledge Foundation’s [Linked Open Vocabularies (LOV)](http://lov.okfn.org/dataset/lov/) page shows popular vocabularies from which metadata properties can be drawn. Use this resource to identify the most common definitions of properties you wish to publish and to consider what metadata meets your users’ needs.

You should use properties from these vocabularies where they match you own requirements so that naming is familiar to users, properties are precisely defined in human and machine readable formats, and metadata data can be compared and combined with metadata from elsewhere. **[TIP.]** If a property does not exist in an established vocabulary, you can define your own. Ideally you should define it as Linked Data with its own URI. Be clear of responsibility and that they may be superseded. **[TIP ENDS.]**

Even if you don’t use Linked Data to describe your metadata or even make it available in a machine readable format, try to use the same terminology as common established vocabularies.

The vocabularies most useful for metadata are:

* Dublin Core Terms (`[dct](http://dublincore.org/documents/dcmi-terms)`) – for basic descriptive properties and ones describing the roles of organisations or people;

* Simple Knowledge Organisation System (`[skos](http://www.w3.org/2004/02/skos/core)`) – for properties describing taxonomies, also known as concept schemes (i.e. lists of intangible things);

* Data Catalogue (`[dcat](http://www.w3.org/TR/vocab-dcat/)`) – for properties defining published datasets;

* Resource Description Framework (`[rdf](https://www.w3.org/TR/rdf11-concepts/)`) – for base properties from which others are derived; and

* Electronic Service Delivery (`[esd](http://def.esd.org.uk/)`) – defined terms used in UK local government that are recommended in ‘[Designing URI sets for the UK public sector](https://www.gov.uk/government/publications/designing-uri-sets-for-the-uk-public-sector)’ but not defined in any other mainstream vocabulary.

#### Identifiers

Identifiers normally comprise a base (or stub) web address and an alpha-numeric identifier. For example the UK’s Office for National Statistics (ONS) identifier for England is `E92000001`. The base address is `http://statistics.data.gov.uk/id/statistical-geography/`, which denotes the type of item identified – in this case a statistical geography. Joining the identifier to the stub creates a Unique Resource Identifier (URI), a globally unique identifier that can be dereferenced over the web, e.g. `[http://statistics.data.gov.uk/id/statistical-geography/E92000001](http://statistics.data.gov.uk/id/statistical-geography/E92000001)`. This would be assigned to the `[dct:identifier](http://dublincore.org/documents/dcmi-terms/#terms-identifier)` property  . 

Sometimes the base address is removed from identifiers to make data more human readable. In such cases an abbreviation for the base address is defined elsewhere as a Compact URI (CURIE), also known as a namespace. For example `"stat.`" could be a CURIE for `http://statistics.data.gov.uk/id/statistical-geography/`, so the URI would be expressed as `stat.E92000001`. In spreadsheet data, a column heading can be associated with a CURIE to abbreviate URIs given in each row of data. Alternatively the base web address and identifiers can be expressed as separate alternate or additional columns.

**[TIP.] **The alphanumeric identifier is unique within the the base address. Avoid putting any meaning into an identifier such that it might become invalid if the thing identified changed. **[TIP ENDS.]**

#### Important metadata properties

Consider using each of these properties in a standard that defines a dataset.

**Subject matter**

* **`**[skos:prefLabel](http://www.w3.org/2004/02/skos/core#prefLabel)` – the preferred label or name. Alternatively you may use `[dct:title](http://dublincore.org/documents/dcmi-terms/#terms-title)`.

* `[skos:altLabel](https://www.w3.org/2009/08/skos-reference/skos.html#altLabel)` – other names by which the dataset might be known. This helps search engines find it. Alternatively you may use `[dct:alternative](http://dublincore.org/documents/dcmi-terms/#terms-alternative)`.

* `[dct:description](http://dublincore.org/documents/dcmi-terms/#terms-description)` – free text description.

* `[dct:spatial](http://dublincore.org/documents/dcmi-terms/#terms-spatial)` – the geographical area covered by the data.

**Status**

* **`**[dct:created](http://dublincore.org/documents/dcmi-terms/#terms-created)` – the date of creation.

* `[dct:modified](http://dublincore.org/documents/dcmi-terms/#terms-modified)` – the date changed. This is usually limited to the date of the last change.

**[TIP.] **Created and modified dates (or dates and times) can apply to a whole dataset and to individual items of data. **[TIP ENDS.]**

**[TIP.] **You may wish to add version and status properties within the context of your use case, e.g. `version: 0.01, status: for review by project team`. After the review it would be become `version 1.00, status: accepted by standards body`. **[TIP ENDS.]**

**Ownership**

* **`**[dct:creator](http://dublincore.org/documents/dcmi-terms/#terms-creator)` – organisation, role or person responsible for creating.

* `[dct:publisher](http://dublincore.org/documents/dcmi-terms/#terms-publisher)` – organisation, role or person responsible for publishing and so normally taking responsibility for content subject to stated quality criteria.

* `[dct:rights](http://dublincore.org/documents/dcmi-terms/#terms-rights)` – a statement about property rights indicating who is entitled to use the dataset and any attribution required. 

* `[dct:license](http://dublincore.org/documents/dcmi-terms/#terms-license)` – a legal document giving permission to use the dataset. The UK [Open Government Licence](http://reference.data.gov.uk/id/open-government-licence) is a suitable value for open datasets which can be used for commercial purposes.

**Format**

* **`**[dct:conformsTo](http://dublincore.org/documents/dcmi-terms/#terms-conformsTo)` – standard to which the dataset conforms, ideally this should be the URI of the data schema. For data that corresponds with a pre-existing structure defined in Linked Data, use `[rdf:type](https://www.w3.org/1999/02/22-rdf-syntax-ns#type)`.

* `[dct:format](http://dublincore.org/documents/dcmi-terms/#elements-format)` – the format of the dataset.

**[TIP.]** The format properties refer to a rendering of a dataset. The native format may be different for different publishers and different from the format in which data is interchanged. A data structure described as a class model (see (‘Class models’)[link to it]) may be expressed differently in different formats, each with its own schema, as given by the `conformsTo` property. **[TIP ENDS.]**

**Quality** 

* `[esd:accuracy](http://def.esd.org.uk/accuracy)` – a statement of how closely the data can be expected to reflect objective facts.

* `[dct:audience](http://dublincore.org/documents/dcmi-terms/#terms-audience)` – the intended consumers of the data.This is not supposed to limit its use, but it gives an indication as to relevant the data might be to a particular need.

* `[esd:intendedLongevity](http://def.esd.org.uk/intendedLongevity)` – for how long you might expect the dataset to be made available and to be maintained.

* `[esd:timeliness](http://def.esd.org.uk/timeliness)` – how up-to-date the dataset is expected to be.

* `[dct:provenance](http://dublincore.org/documents/dcmi-terms/#terms-provenance)` – where the data comes from and any changes in creation and ownership over time that might affect its quality.

* `[dct:source](http://dublincore.org/documents/dcmi-terms/#terms-source)` – a source from which the data is derived. This may be used if a dataset contains values generated by processing of data sourced from another dataset.

**[TIP.]** Quality data is often subjective and can represent intentions or firm commitments. It is important in helping potential users for a view as to how much they might rely on data for a use case. **[TIP ENDS.]**

The above properties are described in the UK Government’s document ‘[Designing URI sets for the UK public sector](https://www.gov.uk/government/publications/designing-uri-sets-for-the-uk-public-sector)’ and suggested in the W3C Web Best Practices Working Group wiki [Quality and Granularity Description Vocabulary](https://www.w3.org/2013/dwbp/wiki/Quality_and_Granularity_Description_Vocabulary) page.

**[IN OUR EXPERIENCE.]** The [Local Government Service List metadata properties](http://standards.esd.org.uk/?uri=list/englishAndWelshServices&tab=linked) draw on the vocabularies described above. Pre-existing quality properties were used where possible.  Properties for accuracy, intended longevity and timeliness did not exist, however, so these were created and can now be used by others. **[IN OUR EXPERIENCE ENDS.]**

