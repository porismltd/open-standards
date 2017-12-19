# Processes for open standards

These three UK-based bodies publish processes for creating a standard.

* The Open Data Institute (ODI): '[Creating new standards](https://docs.google.com/document/d/1lsfdhY8IK8qrS22fS4Rpx8WM89wCXaIDUcuQJLzRJeU/edit?usp=sharing)'.

* Government Digital Service (GDS): '[Open standards for government data and technology](https://www.gov.uk/government/collections/open-standards-for-government-data-and-technology)'.

* iStandUK: '[Process for Standards Adoption](http://e-sd.org/OCjay)'.

Porism and the Local Government Association (LGA) have a common audience (i.e. local government organisations) to iStandUK and so normally apply the iStandUK process which is guided by three templates, pre-filled examples of which are given by links below.

* [Requirement](http://e-sd.org/mVeEe) 	

* [Landscape](http://e-sd.org/jnz38) 	

* [Approach](http://e-sd.org/mABCS)

Our process for creating standards, described in this document, draws on knowledge, examples and experiences of

* schemas defined by the [LGA](http://schemas.opendata.esd.org.uk/?publisher=LGA), the [Department for Communities and Local Government (DCLG)](http://schemas.opendata.esd.org.uk/?publisher=DCLG) and [GDS](http://schemas.opendata.esd.org.uk/?publisher=GDS+%E2%80%93+Government+Digital+Service)

* taxonomies making up [esd-standards](http://standards.esd.org.uk/?) with particular emphasis on the [Local Government Services List](http://id.esd.org.uk/list/englishAndWelshServices).

[Click here](appendices#referenced_schemas) gives a full list of the standards referenced in this guidance.

## Research 

### Identifying the need for a standard

There are a few main reasons for having a standard.

* Data is published by one organisation or person for consumption by another, so the structure and meaning of the data must be documented unambiguously. Consumers of data may be developers of software that adds value to the data. 

* Similar data is issued from multiple publishers for use by one another, or third parties need to be able to combine datasets across publishers.

* To remove misunderstandings between team members and over time (with staff turnover) when working with data on sizeable projects.

The need for a standard may be identified early in a project’s lifecycle or when a project needs to advance to the next stage.

### Is publishing to a standard desirable or desired?

If there is a need to standardise data from many publishers, it does not necessarily follow that they should all publish data compliant with the standard. Some business models rely on taking data from many sources and standardising it to add value and make money. These data intermediaries and/or end consumers of data can apply algorithms (including artificial intelligence) to standardise data. The resultant datasets may conform to a public standard or they may just conform to an organisation’s internal standard to gain competitive advantage.

Published data must at least avoid ambiguity, so terms need to be defined and it should be possible to convert them to a common terminology. You must then assess if the task of further standardisation should be the responsibility of publishers or consumers. If consumers, do they need to conform to a standard? Need that standard be open? 

It is easier to standardise if a new dataset is being published rather than an existing one opened, but standardising existing datasets can improve their quality.

For example, the new requirement from the Department of Communities and Local Government (DCLG) to [publish data on Brownfield Land](https://www.gov.uk/government/publications/brownfield-land-registers-data-standard) was accompanied by a precise data standard.  

The Department's earlier mandates to publish other data, such as spending details, came with no accompanying specification. Commercial organisations therefore add value by combining and standardising the data published in a variety of formats by local authorities. Publishers are encouraged to use standard taxonomies such as the [ProClass](http://id.esd.org.uk/list/proClass) procurement classification scheme to improve the consistency of data combined by third parties.

Government pays to license planning application data from suppliers who combine and make consistent open local government planning data. The cost of such licensing needs to be weighed against the costs and spin-off advantages of funding consistent publishing by local authorities according to a standard.

### Defining the requirement

Document the requirement of a standard in broad terms, considering the following.

* The nature of the data.

* The need met by the standard.

* Who definite and possible publishers are.

* Who the definite and possible consumers are.

* Other interested parties (a.k.a. stakeholders).

* Predicted benefits of the standards, typically one or more of

    * improved availability of information;

    * improved comparability and analysis of information;

    * improved service for the customer;

    * reduced avoidable contact;

    * reduced transaction costs;

    * reduced fraud and error;

    * improved data quality through validation; and

    * increased confidence in data quality.

* Data format(s) suitable for publishers and consumers in the field.

The requirement should state the types of expertise needed to create the standard. Expertise will be needed both from practitioners in the field covered by the standard and from people who will define the standard in technical terms.

!> If an existing standard might be a candidate for adoption or a model for the proposed standard, it should be named at this stage.

It is also useful to record the most likely data formats (CSV, XML, JSON, KML, etc.) in which the schema should be expressed so the type of guidance and the ultimate schema formats needed are known. However, if the standard is well defined independent of format, output of a format specific rendering should not be hard.

### Reviewing what exists

A review of the standards landscape shows what else exists globally that is relevant to the proposed standard. It may identify a schema that can be used as it is or in part. Alternatively it might establish that there is no suitable standard and so a new one needs developing.

If a pre-existing standard is identified, you need to establish its quality and longevity, how open it is and how responsive its owners are to feedback from others. From this information, you can determine if you use the standard as-is or fork a copy which might diverge from the original.

If no suitable standard exists, there might be elements of existing ones that can be drawn on. For example, [Schema.org](http://schema.org/) offers class definitions that might form part of a larger new schema. An analysis of the basic concepts (e.g. service, organisation, person, building, etc.) that the data describes will help identify if schemas might exist to define them. It will also lead you to taxonomies that describe those concepts so you can determine their relevance to your requirement.

<!-- TIP

In defining the [Service Directory standard](http://schemas.opendata.esd.org.uk/ServiceDirectory) for the LGA, we made reference to these pre-existing schemas that are relevant to describing services.

* Schema.org’s [Service schema](http://schema.org/Service)
* [open311](http://www.open311.org/)
* [openReferral](https://openreferral.org/ )
* [Local Links](http://www.localdigitalcoalition.uk/links­support/)
* [European Community ‘SERVICE’ core vocabulary](https://joinup.ec.europa.eu/asset/core_public_service/asset_release/core­public­serv ice­vocabulary­0)

The analysis of concepts identified that these taxonomies are relevant.
* [Service types](http://id.esd.org.uk/list/services) from LGA.
* [Function types](http://id.esd.org.uk/list/functions) from LGA.
* [Local Authorities](http://opendatacommunities.org) (organisations) from Department for Communities and Local Government (DCLG).
* [Statistical geographies](http://statistics.data.gov.uk/) from the Office of National Statistics (ONS).
* [Administrative geographies](http://data.ordnancesurvey.co.uk/ontology/admingeo/) from Ordnance Survey (OS).

end -->

<div class="warn">
    <p><i>Throughout the guidance we'll be sharing our experiences of developing standards openly, which should help you in your own projects.</i></p>
    <p>In defining the <a href="http://schemas.opendata.esd.org.uk/ServiceDirectory" target="_blank">Service Directory standard</a> for the LGA, we made reference to these pre-existing schemas that are relevant to describing services.</p>
    <ul>
        <li>Schema.org’s <a href="http://schema.org/Service" target="_blank">Service schema</a></li>
        <li><a href="http://www.open311.org/" target="_blank">open311</a></li>
        <li><a href="https://openreferral.org/" target="_blank">openReferral</a></li>
        <li><a href="http://www.localdigitalcoalition.uk/links­support/" target="_blank">Local Links</a></li>
        <li><a href="https://joinup.ec.europa.eu/asset/core_public_service/asset_release/core­public­serv ice­vocabulary­0" target="_blank">European Community 'SERVICE' core vocabulary</a></li>
    </ul>
    <p>The analysis of concepts identified that these taxonomies are relevant.</p>
    <ul>
        <li><a href="http://id.esd.org.uk/list/services" target="_blank">Service types</a> from LGA</li>
        <li><a href="http://id.esd.org.uk/list/functions" target="_blank">Function types</a> from LGA</li>
        <li><a href="http://opendatacommunities.org" target="_blank">Local Authorities</a> (organisations) from DCLG</li>
        <li><a href="http://statistics.data.gov.uk/" target="_blank">Statistical geographies</a> from the ONS</li>
        <li><a href="http://data.ordnancesurvey.co.uk/ontology/admingeo/" target="_blank">Administrative geographies</a> from Ordnance Survey (OS)</li>
    </ul>
</div>


At this stage it is worth communicating with suppliers of systems that store the type of data you plan to standardise: they may have schemas which define their data structures, whether these are made public or not. Avoid adopting existing standards whose licencing might constrain adoption and beware of commercial interests biasing a standard towards the interests of particular organisations.

Irrespective as to whether a standard exists, you should examine real-life examples of relevant data to see how much standardisation is included and what the scope of a standard should be. That scope might involve adoption or creation of new taxonomies or data classes, the beginnings of building an ecosystem of reusable standard elements. Consider how valuable new assets might be beyond the immediate need identified in the first stage.

## Develop

### Specifying an approach

Having defined what the requirement is and what already exists, the team proposing to undertake the work should specify the project approach. The specification document

* can be used to tell others, who may also be considering similar work, that the work is going on, and

* gives some assurances about the nature and status of the assets that will be created.

It can also be used to outline the project plan, including but not limited to

* what is to be delivered, e.g. schemas, registers, taxonomies, guidances, sample data, case studies;

* roles and responsibilities of in the development process, including defining the overall manager, experts in relevant fields and stakeholders who will be consulted; 

* time scales;

* principles for development (e.g. in the open, secure group);

* assumptions on which the work is based and depends on other standards;

* consultation processes;

* ownership of the outputs;

* quality criteria to be applied;

* the intended audience of the data, likely usage and usage trends, applications under development or planned that will consume standardised data; and

* ongoing responsibilities for maintenance (by an identified custodian) and extension of the deliverables.

The scope of deliverables will have been established from the review of what exists, it may include a schema and one or more taxonomies. Dependencies on other schemas and taxonomies should be documented.

### Consultation

Consultation can be divided into broad publicity – to engage with people whom you might not have previously identified – and detailed discussion with stakeholders and experts.

Broad publicity is via news articles and social media aimed at data experts but, more importantly, specialists in fields that publish or use the data. Hence user groups, trade bodies, associations and public bodies should be considered for communication directly in addition to contact via specialist online forums and mailing lists. In local government the special interest groups in [Knowledge Hub](https://khub.net/group/guest) provide a good means of communicating with experts. Ideally some broad publicity should happen while you’re assessing the standards landscape so people have the opportunity to bring to your attention standards of which you were not aware.

Detailed consultation should be via a working group, meeting physically and/or online, using a dedicated forum or mailing list and sharing documents as they are drafted. The group should include the owner of the standard and representatives of

* data publishers,

* data consumers,

* experts in the field of the data, and

* data standards experts.

<!--
**[IN OUR EXPERIENCE]**

Our team consulted a range of experts and organisation when developing a Service Directory schema.

* Standards experts – iStandUK, Department for Work & Pensions (DWP) and NHS Digital.

* Porism’s staff expert in local government services.

* Membership organisations of councils: LGA, iNetwork, Local Digital Coalition, Regional Improvement Networks, and National Association of Local Councils (NALC).

* A selection of councils of different types (county, district and unitary) who collate, publish and use data to direct people who need services.

* Local health organisations who gather and use information on health and wellbeing services.

* ODI who were running a parallel project on leisure activity and sports data with an overlapping audience.

* Service Directory application providers who deliver the software in which councils and other organisations record services.

* Software developers interested in building commercial services from service data merged from many providers and accepted by public sector organisations.

**[EXAMPLE ENDS.]**
-->

<div class="warn">
    <p>Our team consulted a range of experts and organisations when developing a Service Directory schema.</p>
    <ul>
        <li><p>Standards experts – iStandUK, Department for Work &amp; Pensions (DWP) and NHS Digital.</p></li>
        <li><p>Porism’s staff expert in local government services.</p></li>
        <li><p>Membership organisations of councils: LGA, iNetwork, Local Digital Coalition, Regional Improvement Networks, and National Association of Local Councils (NALC).</p></li>
        <li><p>A selection of councils of different types (county, district and unitary) who collate, publish and use data to direct people who need services.</p></li>
        <li><p>Local health organisations who gather and use information on health and wellbeing services.</p></li>
        <li><p>ODI who were running a parallel project on leisure activity and sports data with an overlapping audience.</p></li>
        <li><p>Service Directory application providers who deliver the software in which councils and other organisations record services.</p></li>
        <li><p>Software developers interested in building commercial services from service data merged from many providers and accepted by public sector organisations.</p></li>
    </ul>
</div>

### Draft standard

Develop the standard applying relevant [techniques](techniques) and [tools](tools) described in later sections. Normally you would go through multiple iterations of the draft and give working group members an opportunity to comment on each. The group might be sub-divided according to specialisms for consultation on specific parts of the standard, such as the data structure, data quality checks and the content of taxonomies created or modified.

When the draft standard is sufficiently mature and you have accessible guidance documentation, open it up to potential users using the same channels as for the broad publicity at the start of the work.

An open issue logging system, e.g. using [GitHub Issues](https://guides.github.com/features/issues/), ensures issues raised are managed systematically, can be considered by everyone and supported or modified by people other than those who raised them. Issues need to be gathered via multiple channels and transcribed to a single platform. Get contributions from and provide feedback to many interested parties to secure buy-in and later take-up.

!> GitHub is largely a developer tool and is not adopted by most non-IT people, so you might choose [Trello](https://trello.com/), [Asana](https://asana.com/) or another project management tool.

### Test the standard

Test how well the standard is suited to real data with different publishers. Ask them to either output their data using the draft schema or to manually convert their data in its native format to suit the standard you’re testing. Use a checking tool (see [Standardising data formats](tools#standardising-data-formats)) to verify that the data conforms to the schema. If it doesn’t, you may have to modify the way sample data is formatted or change the schema, e.g. if data for a mandatory property is missing. Check with your working group that schema changes do not impede its usefulness.

At this stage you can identify if taxonomies are fit for purpose. Text labels used in source data will need to be converted to identifiers for things (concepts and tangible things) which have preferred and alternative labels. You may add new alternative labels for the different ways in which different publishers describe the same things.

It may be useful to develop helper tools to convert data from a proprietary format to the standard format. Such tools might be made permanent deliverables for use throughout the life of the standard.

Potential data consumers should test data merged from more than one publisher to ensure the standard is sufficiently generic.

### Publish the standard

Publish the standard on a platform accessible to its users. In the case of an open public standard, that means a web address that can be accessed by not registering an account.

Publish the schema under a web domain that denotes authenticity and which you know will not be withdrawn or changed, which could invalidate schema references. The `.gov` and `.gov.uk` domain names are tightly controlled and indicate that content is official. The domains `.org` and `.org.uk` denote ownership by community or public interest groups. These may be less subject to change than ones managed by organisations under political control. A persistent uniform resource locator (PURL) allows you to use an address which can be changed to redirect to a schema (and associated resources) hosted in different places over time.

Publish the standard with metadata that describes its purpose, licensing, quality and audience. Use standard properties drawn from Dublin Core Terms ([DCTerms](http://dublincore.org/documents/dcmi-terms/)), Simple Knowledge Organization System ([SKOS](https://www.w3.org/TR/skos-reference/)) and quality properties taken from ‘[Designing URI sets for the UK public sector](https://www.gov.uk/government/publications/designing-uri-sets-for-the-uk-public-sector)’, published by the Cabinet Office. Quality properties (e.g. accuracy, how often it’s updated, etc.) are more extensive for taxonomies which include data for which provenance and timeliness is important. Properties describing the intended audience, timeliness of updates and other information relevant to maintenance of the standard are important in helping potential users decide if they should adopt the standard. See [Metadata](techniques#metadata) for more details.

For example, the [Linked Data](http://standards.esd.org.uk/?uri=list%2FenglishAndWelshServices&tab=linked) page for the Local Government Services List gives standard metadata for that taxonomy. Note that properties such as 'completeness' and timeliness should be populated realistically, rather than set false expectations for users.

Add a reference to catalogues of standards used within the domain. For example, the [LGA’s open data schemas page](http://schemas.opendata.esd.org.uk/) provides a searchable list of schemas – which define standards used for open data – published for local authorities.

The licence under which the standard is published (expressed as the [Dublin Core rights property](http://purl.org/dc/terms/rights)) is key to informing potential users when and how it can be used. The property should reference the URI (or failing that the URL) of a licence where full details are given. 

!> The UK [Open Government Licence](http://www.nationalarchives.gov.uk/doc/open-government-licence/) is suitable for open data that can be freely used with few constraints.

## Review

### Reviewing adoption of the standard

You can assess the take-up of a standard by informal communication with publishers and consumers or formal recording mechanisms, such as harvesting datasets or implementing a formal registration system.

By harvesting datasets published against the schemas to which they conform (see [Data harvesting and aggregation](tools#data-harvesting-and-aggregation), you can assess how much your schema is being used.

We recommend a flow line system to record progress adopting a standard, especially for initiatives being co-ordinated centrally. It’s preferable that it’s open too, allowing anyone to monitor the progress of participants, which encourages accountability. Such a system will encourage involvement, identify core contacts, show progress and identify where help is needed.


?> For example, the LGA’s [Local Open Data Incentive Scheme](http://incentive.opendata.esd.org.uk) encouraged English councils to publish open data on three themes. Participants received technical guidance and had their published data verified, developing open data skills in each authority. The LGA channelled Government money to the authorities, contributing towards the publisher’s costs. The [Submissions](http://incentive.opendata.esd.org.uk/submission) page shows English councils that published data according to the [planning applications](http://schemas.opendata.esd.org.uk/PlanningApplications), [premises licences](http://schemas.opendata.esd.org.uk/PremisesLicences) and [public toilets](http://schemas.opendata.esd.org.uk/PublicToilets) schemas. For each submission a colour coded submissions page (e.g. for [Leeds planning applications](http://incentive.opendata.esd.org.uk/submission/detail?mode=view&theme=Planning&identifier=Leeds)) shows progress through the six steps involved in the scheme.
<br /><br /><incentive-scheme tab="application"></incentive-scheme>

If you set up a means of data consumers recording their use of the standard and/or datasets which conform to it, you can monitor usage, involve consumers in changes and help publicise their work.

Case studies for specific users can advance the case for it and help you understand how it should be maintained and improved.

### Publicise the standard

Channels for publicising a standard (social media, newsletters, articles in specialist magazines, etc.) can be used to make the standard known to its intended audience. Case studies showing how it is applied and emphasising the benefits are useful.

!> At present there is no mature mechanism for systematic sharing and discovery of standards – something that is badly needed.

### Maintain the standard

The standard should be maintained according to the quality criteria defined in its metadata with clear responsibility for upkeep and means of providing feedback.

Use the mechanisms described in [Reviewing adoption of the standard](#reviewing-adoption-of-the-standard) to identify who has an interest in the standards so they can be informed of any changes and invited to participate in future consultations. 

Working groups used during standard creation can be kept going for ongoing reviews, and forums used during creation provide a good way of supporting ongoing discussion.

Each revision to a standard should go through a mini-version of the consultation, draft, test process used when it was created. Even if members of the original working group become dormant, they should be given an opportunity to comment on proposed revisions and people who are known to have adopted the standard should be consulted.

You need a policy for version control and processes for sticking to the policy. You may keep every version and map every change or just maintain the latest version and logs of changes between versions. Backwards incompatibilities need to be noted and avoided where possible. Deprecate rather than remove old terms or properties where possible. The Dublin Core terms properties [`dct:replaces`](http://dublincore.org/documents/dcmi-terms/#terms-replaces) and [`dct:isReplacedBy`](http://dublincore.org/documents/dcmi-terms/#terms-isReplacedBy) can be used to help migration from deprecated terms.

A formal published review schedule and procedure helps keep a standard current and gives adopters more confidence in it.

### Having your standard adopted for other purposes

When other groups are considering creating a new standard, there needs to be a balance between discouraging creation of a new standard for the same purpose and changing your own standard to shoehorn it to fit a different purpose. The original landscaping and (signed-off) scoping exercises should help show how suited your standard is for adoption elsewhere. 


?> DCLG’s [Open Data Communities](http://opendatacommunities.org/) provides URIs for English local authorities. The [GDS register of English Local Authorities](https://local-authority-eng.register.gov.uk/) provides a different set of dereferencable identifiers for the same organisations a few years later. The [Government Transformation Strategy](https://www.gov.uk/government/publications/government-transformation-strategy-2017-to-2020/government-transformation-strategy) commits by 2020 to 'building a national data infrastructure of registers (authoritative lists that are held once across government) and ensuring they are secured appropriately’, so migration to the register might be inferred to be recommended, but no official guidance is given and the longevity of either source of identifiers is not expressed as metadata. Note that registers are deliberately kept narrow in scope and only define things under the control of their custodians. By breaking standard reference data into a set of narrowly-scoped but linked and definitive registers, we are more likely to achieve a consistent set of reference data.

?> The [Local Government Services List](http://id.esd.org.uk/list/englishAndWelshServices) provides a taxonomy of types of service delivered by English and Welsh local authorities. Definitions of services are subjective, but links to legal powers and duties to deliver services (via their `legislation.gov.uk` URIs) help identify distinct service types. Different audiences tend to define services in different ways and often want a concise list that might, for example, match a council’s departmental structure, represent service groupings on a council’s website or act as broad headings to categorise open data. The approach adopted is to have a highly granular taxonomy of almost 1000 types of service. Service types are then grouped by a number of other hierarchies: taxonomies that sit on top of it and map to the detailed services covered. Two such taxonomies of groupings maintained by the LGA are the [Functions List](http://id.esd.org.uk/list/functions) and the [Website Navigation List](http://id.esd.org.uk/list/navigation). Hence it avoids encouragement to change the core service taxonomy for a specific purpose.

## Tips for making a standard succeed

**1. Make sure a standard is really needed**

Consider if the objectives for data sharing can be met efficiently without a data standard. Can consumers standardise the data rather than rely on it being published in a standard way? Can natural language processing and artificial intelligence be used to derive a standards interpretation of that has not been published in a standard way?

**2. Start simple but design for complexity**

Make your standard sufficiently simple to not be too daunting to publishers. But design with a full data model in mind so that later extensions do not invalidate standard data published by early adopters.

**3. Motivate the publisher**

Establish a commercial and/or regulatory framework that motivates data owners to publisher according to the standard. Or design the standard such that it reduces burdens on publishers. For example a standard might cater for data that might otherwise need to be reported in multiple other ways. Publishers can also be relieved of responsibilities for providing web pages and apps that process their data if innovators pick up standardised data and use it in their own apps.

Promote the work of publishers that follow the standard.

**4. Promote quick wins**

Sizable gains from standards can sometimes only be achieved after widespread adoption. So try to identify shorter term goals that can be achieved and publicised to kick start adoption. Standards from [Schema.org](http://schema.org/) have achieved success because they help adopters improve web search engine rankings.

**5. Don’t lose sight of your objectives**

Define use cases for the standard and refer to them (and representative users) throughout the standard development process. This does not preclude innovative use cases being identified and accommodated during standard development so long as they don’t compromise the main objectives.

Consider an agile approach to standards development with explicitly defined roles of: team lead, team member, standard owner, technical expert, domain expert, independent tester and other stakeholders.
