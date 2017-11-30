# 2. Techniques

## 2.1 Semantics and data properties

### 2.1.1 Metadata

Metadata is the data that describes a dataset rather than the actual data being published.  In practice the distinction is not always clear and a rich schema may define properties that both describe and form part of the data.

Metadata will describe the subject matter, status, ownership, format and quality of a dataset.  The Open Knowledge Foundation’s [Linked Open Vocabularies (LOV)](http://lov.okfn.org/dataset/lov/) page shows popular vocabularies from which metadata properties can be drawn.   Use this resource to identify the most common definitions of properties you wish to publish and to consider what metadata meets your users’ needs.

You should use properties from these vocabularies where they match you own requirements so that naming is familiar to users, properties are precisely defined in human and machine readable formats, and metadata data can be compared and combined with metadata from elsewhere.  If a property does not exist in an established vocabulary, you can define your own.  Ideally you should define it as linked data with its own URI. Be clear of responsibility and that they may be superseded.

Even if you don’t use link data to describe your metadata or even make it available in a machine readable format, try to use the same terminology as common established vocabularies.

The vocabularies most useful for metadata are:

* Dublin Core Terms ([dct](http://dublincore.org/documents/dcmi-terms)) - for basic descriptive properties and ones describing the roles of organisations or people

* Simple Knowledge Organisation System ([skos](http://www.w3.org/2004/02/skos/core)) - for properties describing concept schemes (ie lists of intangible things)

* Data Catalogue ([dcat](http://www.w3.org/TR/vocab-dcat/)) - for properties defining published datasets

* Resource description framework ([rdf](https://www.w3.org/TR/rdf11-concepts/)) - for base properties from which others are derived

* electronic service delivery ([esd](http://def.esd.org.uk/)) - defined terms used in UK local government that are recommended in [Designing URI sets for the UK public sector](https://www.gov.uk/government/publications/designing-uri-sets-for-the-uk-public-sector) but not defined in any other mainstream vocabulary

#### 2.1.1.1 Identifiers

Use the property [dct:identifier](http://dublincore.org/documents/dcmi-terms/#terms-identifier) -  a Uniform Resource Identifier or globally unique identifier that can be dereferenced over the web.  

Identifiers normally comprise a base (or stub) web address and alpha-numeric identifier. For example the UK’s Office for National Statistics (ONS) identifier for England is [http://statistics.data.gov.uk/id/statistical-geography/E92000001](http://statistics.data.gov.uk/id/statistical-geography/E92000001).

The base address of [http://statistics.data.gov.uk/id/statistical-geography/](http://statistics.data.gov.uk/id/statistical-geography/) denotes the type of item identified.  Sometimes the base address is removed from identifiers to make data more human readable.  In such cases an abbreviation for the base address (such as "stat." for  [http://statistics.data.gov.uk/id/statistical-geography/](http://statistics.data.gov.uk/id/statistical-geography/E92000001)) is defined elsewhere as a Compact URI (CURIE), also known as a namespace. So the URI would be expressed as [stat.E9200000](http://statistics.data.gov.uk/id/statistical-geography/E92000001)1 In spreadsheet data, a column heading can be associated with a CURIE to abbreviate URIs given in each row of data.  Alternatively the base web address and identifiers can be expressed as separate alternate or additional columns.

The alphanumeric identifier is unique within the the base address.  Avoid putting any meaning into an identifier such that it might become invalid if the thing identified changed.

#### 2.1.1.1 Important metadata properties

Consider using each of these properties:

Subject matter

* [skos:prefLabel](http://www.w3.org/2004/02/skos/core#prefLabel) - the preferred label / name.  Alternatively you may use [dct:title](http://dublincore.org/documents/dcmi-terms/#terms-title)

* [skos:altLabel](https://www.w3.org/2009/08/skos-reference/skos.html#altLabel) - other names by which the dataset might be know.  This helps search engines find it. Alternatively you may use [dct:alternative](http://dublincore.org/documents/dcmi-terms/#terms-alternative).

* [dct:description ](http://dublincore.org/documents/dcmi-terms/#terms-description)- free text description

* [dct:spatial](http://dublincore.org/documents/dcmi-terms/#terms-spatial) - the geographical area covered by the data

Status

* [dct:created](http://dublincore.org/documents/dcmi-terms/#terms-created) -  the date of creation

* [dct:modified](http://dublincore.org/documents/dcmi-terms/#terms-modified) - the date changed.  This is usually limited to the date of the last change

Created and modified dates (or dates and times) can apply to a whole dataset and to individual items of data.

You may wish to add version and status properties within the context of your use case. (eg version: 0.01, status: for review by project team; version 1.00, status: accepted by standards body)

Ownership

* [dct:creator](http://dublincore.org/documents/dcmi-terms/#terms-creator) - organisation, role or person responsible for creating

* [dct:publisher](http://dublincore.org/documents/dcmi-terms/#terms-publisher) -  organisation, role or person responsible for publishing and so normally taking responsibility for content subject to stated quality criteria

* [dct:rights](http://dublincore.org/documents/dcmi-terms/#terms-rights) - a statement about property rights indicating who is entitled to use the dataset and any attribution required. 

* [dct:license](http://dublincore.org/documents/dcmi-terms/#terms-license) - a legal document giving permission to use the dataset. The UK [Open Government Licence](http://reference.data.gov.uk/id/open-government-licence) is a suitable value for open datasets which can be used for commercial purposes

Format

* [dct:conformsTo](http://dublincore.org/documents/dcmi-terms/#terms-conformsTo) - standard to which the dataset conforms, ideally this should be the URI of the data schema (discuss somewhere schema URIs) . For data that corresponds with a pre-existing structure defined in linked data, use [rdf:type](https://www.w3.org/1999/02/22-rdf-syntax-ns#type).

* [dct:format](http://dublincore.org/documents/dcmi-terms/#elements-format) - the format of the dataset

The format properties refer to a rendering of a dataset.  The native format may be different for different publishers and different from the format in which data is interchanged.  A data structure described as a class model (see ... below) may be expressed as different in different formats, each with its own schema, as given by the conformsTo property.

Quality 

* [esd:accuracy](http://def.esd.org.uk/accuracy) - a statement of how closely the data can be expected to reflect objective facts

* [dct:audience](http://dublincore.org/documents/dcmi-terms/#terms-audience) - the intended consumers of the data.This is not supposed to limit its use, but it gives an indication as to relevant the data might be to a particular need

* [esd:intendedLongevity](http://def.esd.org.uk/intendedLongevity) - for how long you might expect the dataset to be made available and to be maintained

* [esd:timeliness](http://def.esd.org.uk/timeliness) - how up-to-date the dataset is expected to be.

* [dct:provenance](http://dublincore.org/documents/dcmi-terms/#terms-provenance) - where the data comes from and any changes in creation and ownership over time that might affect its quality

* [dct:source](http://dublincore.org/documents/dcmi-terms/#terms-source) - a source from which the data is derived.  This may be used if a dataset contains values generated by processing of data sourced from another dataset

Quality data is often subjective and can represent intentions or firm commitments.  It is important in helping potential users for a view as to how much they might rely on data for a use case.

The above properties are described in the UK government’s document [Designing URI sets for the UK public sector](https://www.gov.uk/government/publications/designing-uri-sets-for-the-uk-public-sector) and suggested in the W3C Web Best Practices Working Group wiki [Quality and Granularity Description Vocabulary](https://www.w3.org/2013/dwbp/wiki/Quality_and_Granularity_Description_Vocabulary) page.

**Example:** the [Local Government Service List metadata properties](http://standards.esd.org.uk/?uri=list/englishAndWelshServices&tab=linked) draw on the vocabularies described above. Colour code examples in the wiki to distinguish from the main body of the text.

### 2.1.2 Statistical data

The Local Government Association’s LG Inform Plus (formerly esd-toolkit) database holds statistics that are useful to local authorities wishing to compare performance and demographics with other authorities and between small areas within their own boundaries.  Such data allows them to see how effective they are and to target services (such as those to improve public health) at relevant people rather than using a scatter-gun approach.

The data is an amalgamation of public data from disparate national sources supplemented by data gathered locally.  A standard way of structuring the data is needed to overcome differences in how it is represented by the many source organisations (eg Office of National Statistics), Department for Education, Public Health England).  

The standard was defined by analysing data from various sources, which is normally presented in spreadsheets or via Application Programming Interfaces (APIs).  We also looked at the database structure of existing data reporting tools, including the Audit Commission’s Value for Money tool.

In abstract terms, each data point is represented by a value (typically a number or a category) that has a number of properties which can be grouped in dimensions.  The Statistical Data and Metadata eXchange (SDMX) provides a generic standard for exchanging statistical data.  Because of a lack of familiarity with SDMX, because others had not used it and because it is so generic, we chose a model with three fixed dimensions that always apply to the data. 

 These dimensions are:

* Area 

* Time period

* Metric (or indicator) type

An individual data item has a precise value for each of these dimensions.  For example, a single bicycle theft has a count of one with a specific date and time, a point on the map and a metric type denoting bicycle theft.  But much data is only available at an aggregated level, so data might contain a count of thefts in general within an area (eg a police neighbourhood) over a time period (eg a calendar month).

The data structure therefore needs to record data at the most detailed level at which it is available and needed.  Aggregations over longer time periods, bigger areas and broader metric types may be generated on the fly (as in a spreadsheet’s pivot table) or aggregated in batch and stored for future reference.

These are the three dimensions in more detail:

**Area **has an area type which is a point (as given by x and y map coordinates) or a named polygon.  Hierarchies of areas define how data can be aggregated up from small to larger areas.  An example of a hierarchy of area types used from official statistics in England is (from large to small):

* [Country](http://neighbourhoods.esd.org.uk/#?areaType=Country&tab=ViewAreaType)

* [Region](http://neighbourhoods.esd.org.uk/#?areaType=Region&tab=ViewAreaType)

* [Fire authority](http://neighbourhoods.esd.org.uk/#?areaType=FireAuthority&tab=ViewAreaType)

* [County](http://neighbourhoods.esd.org.uk/#?areaType=County&tab=ViewAreaType)

* [District](http://neighbourhoods.esd.org.uk/#?areaType=District&tab=ViewAreaType)

* [Medium level super output area](http://neighbourhoods.esd.org.uk/#?areaType=MLSOA&tab=ViewAreaType) (MSOA)

* [Lower level super output area](http://neighbourhoods.esd.org.uk/#?areaType=LLSOA&tab=ViewAreaType) (LSOA)

* [Output area](http://neighbourhoods.esd.org.uk/#?areaType=OutputArea&tab=ViewAreaType)

Links from the above area types are to the LGA’s Natural Neighbourhoods area type page which shows parent and child area types and "same as" relationships for equivalent area type definitions elsewhere.  

Area types can be polyhierarchical (eg a district is broken down by both MSOAs and wards) and sometimes the fit of areas within their parent is only approximate, in which case a measure of degree of fit can be useful.

Where data describes an area, care is needed to avoid double counting across overlapping areas (eg adding the population of a county to that the districts it contains).  However, sometimes an area is used as a proxy for the organisation governing it. In theses cases data pertaining to the organisations can be added.  For example spending on roads by a local authority and spending by the Highways Agency in the same area should be totalled to get overall spending on roads.

**Time period **has a time period type such as calendar month, calendar year, financial year, academic year.  Metrics values may be aggregated over a time period (eg all crimes in a month) or represent a count at a point in time that is sampled for each time period (eg population for a census year).  The former can be aggregated over time (eg add the crimes in each month to get the year’s crime figures); the latter cannot.

**Metric type** is a broad definition of what the statistics define. Hierarchies of metric type can be defined in the same way as hierarchies of areas can. For example, crime can be defined from broad to narrow as:

* [Overall crime](http://id.esd.org.uk/metricType/1068)

* [Theft crime](http://id.esd.org.uk/metricType/3813)

* [Bicycle theft](http://id.esd.org.uk/metricType/4536)

Sometimes metric types break down in multiple ways. So employment data can be defined by:

* [Employment contract type](http://id.esd.org.uk/circumstanceCollection/Workcontract) (part-time, full-time, ...)

* [Working hours](http://id.esd.org.uk/circumstanceCollection/WorkingHours) (temporary, permanent, ...)

* Employee [gender](http://id.esd.org.uk/circumstanceCollection/Gender) (female, male, ...)

Detailed metric types, such as the [number of female part time employees who are temporary](http://id.esd.org.uk/metricType/579), define figures which can be aggregated to derive different summaries according to how metric types are related.

Relationships between metric types are given by the circumstances they define, such as [Employment contract type](http://id.esd.org.uk/circumstanceCollection/Workcontract), [Working hours](http://id.esd.org.uk/circumstanceCollection/WorkingHours) and [Gender](http://id.esd.org.uk/circumstanceCollection/Gender).  By standardising these in a [circumstance types list](http://id.esd.org.uk/list/circumstances) according to standard rules for vocabularies, we can relate metrics from different sources sources that use the same breakdowns and hence analyse for patterns in the data.

The structure described above allows for data items (ie metric values) to be queried by:

* Area or a group of areas (eg all wards in a district)

* Time period or a groups of time periods (eg the last twelve months)

* Metric type or a group of metric types (eg all metric types in the dimension defined by the crime types circumstance)

Separate queries on areas, periods and metric types are provided.  As well as raw data values, statistical functions are performed (eg total, mean, standard deviation thresholds) for ranges of values) applying rules for what metric values can meaningfully be aggregated over time and area.

### 2.1.3 Geographical data

Data describing an area has little meaning if that area is not precisely defined. The county of [Nottinghamshire](http://id.esd.org.uk/neighbourhood/E10000024) largely excludes the major town/city of [Nottingham](http://id.esd.org.uk/neighbourhood/J01000067) - [see comparison](http://neighbourhoods.esd.org.uk/#?areaType=County&area=E10000024&overlayType=TOWNCITY&tab=Map).  Town centres within major cities or counties are often not defined in machine readable terms (or in any open way beyond a name).

Unique identifiers (see 2.1.1.1) are essential to give geographical data meaning.  The types of those identifiers show what kind of geographies you are talking about (administrative, statistical, electoral, health, education, parks, etc).  Link to the big UK geographies diagram.

 

Administrative organisations need to be distinguished from the geographical areas they govern, although it is often correct to assume the spatial coverage of an organisation’s data is the area it governs.

If an area changes, for example because of changes enacted in the UK by the  Local Government Boundary Commission for England ([LGBCE](https://www.lgbce.org.uk/)), it should be assigned a new unique identifier with corresponding boundary.  Such changes can make data series hard to monitor over time, but they avoid incorrect comparisons being made over time of areas which might keep the same name but change boundaries..  

Geographies may be defined sub-dividing statistics.  In the UK the Office for National Statistics ([ONS](https://www.ons.gov.uk/)) defines output areas ([OA](http://statistics.data.gov.uk/id/statistical-entity/E00)s), which have up to about 150 households, for publishing detailed data.   These areas are grouped into super output areas ([LSOA](http://statistics.data.gov.uk/id/statistical-entity/E01)s and [MSOA](http://statistics.data.gov.uk/id/statistical-entity/E02)s) for aggregate statistics, including those which cannot be published at OA level without disclosing personal data.  The same groupings areas are often used for defining the coverage of third party data.  

Understanding the relationships between area types allows aggregation and comparison of data.  Areas of one type contain (ie are the parents of) or are contained by (ie are the children of).areas of another area type  The diagram to the side shows the hierarchy of official UK statistical geographies relevant to local government.

Note that the "contains" relationship might not be exact.  ONS publishes a “best fit” between OAs and electoral wards, indicating the OAs that are mostly contained within electoral geographies.

Either integrate or cut the following para and diagram

Any geography is defined by firstly its area type and secondly the areas which belong to that area type.  Area types may be hierarchical i.e. one area type may fit inside a parent area type and may also be the parent of other (smaller) area types.  This is illustrated by the administrative geography in England which has a multi-tier structure as shown in the diagram below.

![image alt text](image_1.png)

There may be many areas defined for any area type.  An area is an actual physical location as defined by a boundary on a map.  For example for the administrative area type of ‘London Borough’ there are 32 defined areas such as ‘Lambeth, Westminster, Barnet etc.

To be able to identify an area and understand its exact geographical location the following properties need to be defined:

* Identifier/URI

* Label.  The name or a label describing the area e.g. Lambeth, Birmingham, Cumbria

* Boundary of the area.  Typically published in one or more of these digital formats such as Shapefile, KML, GeoJSON, WMS (Web Map Service).

* Parent area(s) of a type which contains the type of the area being defined

* Child area(s) of a type which is contained by the type of the area being defined.

If areas are not defined by a reliable third party (such as ONS), you need to define them yourself with, as a minimum, the above properties.  This is often the case for organisational sub-divisions within local authorities, such as children’s services areas or town centres.  It is also the case for natural neighbourhoods, which reflect real life communities based on geographies that don’t conform to official boundaries.

The Natural Neighbourhoods tool, described in section 3.1.2 below, allows anyone to record their own areas as open data and to relate them to other official and unofficial areas.


![concept model](images/icon48.png "Logo Title Text 1")