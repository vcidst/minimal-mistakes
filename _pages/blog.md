---
layout: archive
classes: wide
permalink: /blog/
title: "Shailendra's Blog"
author_profile: true
comments: false
---

{{ content }}

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts | default: "Recent Posts" }}</h3>

{% for post in paginator.posts %}
  {% include archive-single.html %}
{% endfor %}

{% include paginator.html %}
