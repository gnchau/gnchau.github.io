---
layout: home
title: Home
---

<div id ="intro-wrapper" class="l-middle">
	<div id="intro-title-wrapper" class="intro-left">
		<h1 id="intro-title">👋🏽, I'm Grant Chau!</h1>
	</div>
	<div class="intro-left">
	<div class="intro-left">
		<div class="intro-left">
		I’m interested in the <b>intrinsic structures</b> present within extensive, <b>high-dimensional biomedical datasets</b> and <b>establishing</b> the circumstances under which these structures can be <b>recovered</b>, <b>interpreted</b>, and <b>leveraged for therapeutic impact.</b>
	</div>
	<div style="height: 1rem"></div>
	<div>
		I work on developing optimal representations derived from biomedical statistical constraints and multimodal co-learning architectures that integrate low- and high-signal imaging data for efficient disease detection and treatment planning.
	</div>
	<div style="height: 1rem"></div>
		I am currently a first year Ph.D. student in <a href="https://web.cs.dartmouth.edu/" target="_blank"><img class="intro-logo" style="width: 19px; padding-bottom: 5px;" src="/images/dartmouth.svg"></a> Dartmouth's CS Department, where I am fortunate enough to be co-advised by <a href="https://sites.dartmouth.edu/bhattacharya-lab/" target="_blank">Prof. Indrani Bhattacharya</a> and <a href="https://persist-lab.github.io/portfolio/" target="_blank">Prof. Sarah Masud Pruem</a>. Previously, I was a computational associate in <a href="https://www.broadinstitute.org/bios/benjamin-neale" target="_blank">Prof. Ben Neale's</a> lab at <a href="https://www.broadinstitute.org/" target="_blank"><img class="intro-logo" style="width: 19px; padding-bottom: 5px;" src="/images/broad.svg"></a> the Broad Insitute of MIT and Harvard, where I worked on problems in statistical genetics and mathematical biology. Before my time at the Broad, I completed my undergrad in Computer Science and Mathematics at <a href="https://www.khoury.northeastern.edu/" target="_blank"><img class="intro-logo" style="width: 19px; padding-bottom: 5px;" src="/images/neu.svg"></a> Northeastern University, where I was gratefully advised by <a href="https://bouve.northeastern.edu/directory/ennio-mingolla/" target="_blank">Prof. Ennio Mingolla</a>.
	</div>
	<div style="height: 1rem"></div>

</div>

<div class="intro-right">
	<img id="intro-image" class="intro-right" src="/images/profile_3.jpg">
	<div style="height: 0.5rem"></div>
	<div id="intro-image-links" class="intro-right">
		{% for link in site.data.social-links %}
			{% if link.on-homepage == true %}
				{% include social-link.html link=link %}
			{% endif %}
		{% endfor %}
	</div>
	<div style="height: 0.5rem"></div>
	<div id="intro-cv-wrapper" class="intro-right">
		{% for link in site.data.social-links %}
			{% if link.id == "cv-web" %}
				{% include social-link.html link=link %}
			{% endif %}
		{% endfor %}
		<!-- <div id="intro-cv"><a href="/cv">Here's my CV.</a></div> -->
	</div>
	</div>
</div>

<hr class="l-middle home-hr">

<h2 class="feature-title l-middle">
	Featured <a href="/cv#writing">Research Works</a>
</h2>
<div class="cover-wrapper l-screen">
	{% assign sortedPublications = site.categories.papers | sort: 'feature-order' %}
	{% for feature in sortedPublications %}
		{% if feature.makeCard == true %}
			{% include feature.html feature=makeCard %}
		{% endif %}
	{% endfor %}
</div>

<hr class="l-middle home-hr">

<h2 class="feature-title l-middle">
	<a href="/cv#honors-and-awards">Honors and Awards</a>
</h2>
{% for award in site.data.awards %}
{% include cv/award.html award=award %}
{% endfor %}

<hr class="l-middle home-hr">

<h2 class="feature-title l-middle">
	<a href="/cv#academic-research-experience">Research Experience</a>
</h2>
{% for experience in site.data.experiences %}
{% if experience.type == 'academic' %}
{% include cv/experience.html experience=experience %}
{% endif %}
{% endfor %}
