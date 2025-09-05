---
layout: cv
title: CV
permalink: cv/
jsarr:
- js/scripts.js
---

<h1 id="cv-title"><a href="{{ site.url }}">Grant Chau</a></h1>

<!-- <div id="cv-toc">
<ul class="cv-description">
	<li>Education</li>
	<li>Industry Research</li>
	<li>Academic Research</li>
	<li>Honors and Awards</li>
	<li>Publications</li>
	<li>Talks</li>
	<li>Press</li>
	<li>Teaching</li>
	<li>Mentoring</li>
	<li>Grants and Funding</li>
	<li>Interactive Articles</li>
	<li>Service</li>
	<li>Design</li>
	<li>References</li>
</ul>
</div> -->
<div>
  <br/>
</div>

<div>
I design and implement <b><span class="cv-ml">machine learning</span></b> architectures and <b><span class="cv-math">mathematical</span></b> models that augment our understanding of human health. I am interested in machine learning theory, multimodal co-learning, and optimal representation.
</div>

<!-- <div class="cv-spacer"></div>

<div>
description
</div> -->

<div class="cv-spacer"></div>

<div class="cv-image-links-wrapper">
	<div class="cv-image-links">
		{% for link in site.data.social-links %}
			{% if link.cv-group == 1 %}
				{% include social-link.html link=link %}
			{% endif %}
		{% endfor %}
	</div>
	<div class="cv-image-links">
		{% for link in site.data.social-links %}
			{% if link.cv-group == 2 %}
				{% include social-link.html link=link %}
			{% endif %}
		{% endfor %}
	</div>
</div>

***

## Education

{::nomarkdown}
{% for degree in site.data.education %}
{% include cv/degree.html degree=degree %}
{% endfor %}
{:/}

## Writing


{% assign selectedBoolForBibtex = false %}


<!-- ### Demo -->

<!-- {% assign demo = site.categories.papers | where: 'type', "demo" %}
{% for pub in demo %}
{% include cv/publication.html pub=pub selectedBoolForBibtex=selectedBoolForBibtex %}
{% endfor %} -->

### Preprints

{% assign preprint = site.categories.papers | where: 'type', "preprint" %}
{% for pub in preprint %}
{% include cv/publication.html pub=pub selectedBoolForBibtex=selectedBoolForBibtex %}
{% endfor %}

### Conference Proceedings and Posters

{% assign conference = site.categories.papers | where: 'type', "conference" %}
{% for pub in conference %}
{% include cv/publication.html pub=pub selectedBoolForBibtex=selectedBoolForBibtex %}
{% endfor %}

<!---
### Workshop

{% assign workshop = site.categories.papers | where: 'type', "workshop" %}
{% for pub in workshop %}
{% include cv/publication.html pub=pub selectedBoolForBibtex=selectedBoolForBibtex %}
{% endfor %} -->

<!-- ### Poster -->

{% assign poster = site.categories.papers | where: 'type', "poster" %}
{% for pub in poster %}
{% include cv/publication.html pub=pub selectedBoolForBibtex=selectedBoolForBibtex %}
{% endfor %}


## Honors and Awards

{% for award in site.data.awards %}
{% include cv/award.html award=award %}
{% endfor %}

<!-- ## Industry Research Experience

{% for experience in site.data.experiences %}
{% if experience.type == 'industry' %}
{% include cv/experience.html experience=experience %}
{% endif %}
{% endfor %} -->
## Academic Research Experience

{% for experience in site.data.experiences %}
{% if experience.type == 'academic' %}
{% include cv/experience.html experience=experience %}
{% endif %}
{% endfor %}

## Industry Experience

{% for experience in site.data.experiences %}
{% if experience.type == 'industry' %}
{% include cv/experience.html experience=experience %}
{% endif %}
{% endfor %}

<!-- ### Miscellaneous

{% assign preprint = site.categories.papers | where: 'type', "misc" %}
{% for pub in preprint %}
{% include cv/publication.html pub=pub selectedBoolForBibtex=selectedBoolForBibtex %}
{% endfor %} -->

<!-- ## Talks

{% assign talktitles = site.data.talks | group_by:"title" %}
{% for title in talktitles %}
{% include cv/talk.html talk=title %}
{% endfor %} -->

<!-- ## Press

{% for press in site.data.press %}
{% include cv/press.html press=press %}
{% endfor %} -->

## Teaching

{% for teach in site.data.teaching %}
{% include cv/teaching.html teach=teach %}
{% endfor %}

<!-- ## Mentoring

{::nomarkdown}
{% for mentee in site.data.mentoring %}
{% include cv/mentee.html mentee=mentee %}
{% endfor %}
{:/} -->

<!-- ## Grants and Funding

{% for fund in site.data.funding %}
{% include cv/fund.html fund=fund %}
{% endfor %} -->

<!-- ## Interactive Articles

{% for article in site.data.articles %}
{% unless article.feature-only %}
{% include cv/article.html article=article %}
{% endunless %}
{% endfor %} -->

## Technology Skills

{% for skill in site.data.skills %}
{% include cv/skill.html skill=skill %}
{% endfor %}

<!-- ## Service -->

<!-- <div class="cv-service-title"><b>Educational Outreach</b></div> -->
{% for outreach in site.data.educational-outreach %}
{% include cv/educational-outreach.html outreach=outreach %}
{% endfor %}

<!-- <div class="cv-service-title"><b>Institutional</b></div> -->
{% for outreach in site.data.institutional-service %}
{% include cv/educational-outreach.html outreach=outreach %}
{% endfor %}
<!-- <div class="cv-service-title"><b>Organizer</b></div>
{% for venue in site.data.organizer %}
{% include cv/venue.html venue=venue %}
{% endfor %} -->

<!-- <div class="cv-service-title"><b>Program Commitee</b></div>
{% for venue in site.data.pc %}
{% include cv/venue.html venue=venue %}
{% endfor %} -->

<!-- <div class="cv-service-title"><b>Reviewer</b></div>
{% for venue in site.data.reviewer %}
{% include cv/venue.html venue=venue %}
{% endfor %} -->

<!-- <div class="cv-service-title"><b>Institutional</b></div>
{% for institution in site.data.institutional %}
{% include cv/institutional.html institution=institution %}
{% endfor %} -->

<!-- <div class="cv-service-title"><b>Member</b></div>
{% for member in site.data.memberships %}
{% include cv/member.html member=member %}
{% endfor %} -->

<!-- ## Design

{% for design in site.data.designs %}
{% include cv/design.html design=design %}
{% endfor %} -->

<!-- ## References

{% for reference in site.data.references %}
{% include cv/reference.html reference=reference %}
{% endfor %}

[cv]: {{ site.url }}/cv.pdf "My CV." -->
