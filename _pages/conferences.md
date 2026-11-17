---
title: "Conferences & Workshops"
description: "Conferences, workshops, schools and hackathons I have attended and presented at"
layout: single
permalink: /conferences/
---

<div class="sj" markdown="0">

<section class="sj-hero">
  <p class="sj-eyebrow">Events</p>
  <h1 class="sj-title">Conferences, schools &amp; <span class="sj-grad">workshops</span></h1>
  <p>The events I have attended or presented at during my PhD, most recent first.</p>
</section>

<div class="sj-stats">
  <div class="sj-stat sj-reveal"><strong data-count="9">9</strong><span>events attended or presented at</span></div>
  <div class="sj-stat sj-reveal"><strong data-count="6">6</strong><span>talks and posters</span></div>
  <div class="sj-stat sj-reveal"><strong data-count="3">3</strong><span>countries with events (Italy, Greece, UK)</span></div>
</div>

<div class="sj-timeline">
{%- for e in site.data.events %}
  <div class="sj-tl"><small>{{ e.when }}</small><h4><span class="sj-kind">{{ e.kind }}</span>{{ e.title }}{% if e.note %} {{ e.note }}{% endif %}</h4></div>
{%- endfor %}
</div>

</div>
