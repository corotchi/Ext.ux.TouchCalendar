Ext.data.JsonP.Ext_ux_TouchCalendar({"mixedInto":[],"static":false,"html_filename":"Ext.ux.TouchCalendarEvents-all-min-debug.html","xtypes":[],"tagname":"class","inheritable":false,"allMixins":[],"extends":"Ext.Carousel","statics":{"css_var":[],"cfg":[],"css_mixin":[],"event":[],"method":[],"property":[]},"uses":[],"members":{"css_var":[],"css_mixin":[],"cfg":[{"static":false,"required":null,"tagname":"cfg","owner":"Ext.ux.TouchCalendar","protected":false,"deprecated":null,"name":"enableEventBars"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.ux.TouchCalendar","protected":false,"deprecated":null,"name":"enableSimpleEvents"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.ux.TouchCalendar","protected":false,"deprecated":null,"name":"enableSwipeNavigate"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.ux.TouchCalendar","protected":false,"deprecated":null,"name":"viewConfig"}],"event":[],"method":[{"static":false,"required":null,"tagname":"method","owner":"Ext.ux.TouchCalendar","protected":false,"deprecated":null,"name":"afterRender"},{"static":false,"required":null,"tagname":"method","owner":"Ext.ux.TouchCalendar","protected":false,"deprecated":null,"name":"getValue"},{"static":false,"required":null,"tagname":"method","owner":"Ext.ux.TouchCalendar","protected":false,"deprecated":null,"name":"onTableHeaderTap"},{"static":false,"required":null,"tagname":"method","owner":"Ext.ux.TouchCalendar","protected":false,"deprecated":null,"name":"setMode"},{"static":false,"required":null,"tagname":"method","owner":"Ext.ux.TouchCalendar","protected":false,"deprecated":null,"name":"setValue"}],"property":[{"static":false,"required":null,"tagname":"property","owner":"Ext.ux.TouchCalendar","protected":false,"deprecated":null,"name":""}]},"xtype":null,"author":"Stuart Ashworth","protected":false,"linenr":11,"subclasses":[],"singleton":false,"alias":null,"deprecated":null,"docauthor":null,"private":false,"superclasses":[],"mixins":[],"name":"Ext.ux.TouchCalendar","filename":"Ext.ux.Calendar/Ext.ux.TouchCalendarEvents/min/Ext.ux.TouchCalendarEvents-all-min-debug.js","component":false,"code_type":"assignment","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Carousel<div class='subclass '><strong>Ext.ux.TouchCalendar</strong></div></div></pre><div class='doc-contents'><p>This extension wraps the <a href=\"#!/api/Ext.ux.TouchCalendarView\" rel=\"Ext.ux.TouchCalendarView\" class=\"docClass\">Ext.ux.TouchCalendarView</a> in a Ext.Carousel component and allows the calendar to respond to swipe\ngestures to switch the displayed period. It works by creating 3 Ext.ux.TouchCalendarViews and dynamically creating/removing\nviews as the user moves back/forward through time.</p>\n\n<p><img src=\"http://www.swarmonline.com/Ext.ux.TouchCalendar/screenshots/Ext.ux.TouchCalendar-month-ss.png\" alt=\"Ext.ux.TouchCalendar Screenshot\" /></p>\n\n<p><a href=\"http://www.swarmonline.com/wp-content/uploads/Ext.ux.TouchCalendar/examples/Ext.ux.TouchCalendar.html\">Ext.ux.TouchCalendar Demo</a></p>\n</div><div class='members'><div id='m-cfg'><div class='definedBy'>Defined By</div><h3 class='members-title'>Config options</h3><div class='subsection'><div id='cfg-enableEventBars' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendar' rel='Ext.ux.TouchCalendar' class='definedIn docClass'>Ext.ux.TouchCalendar</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-cfg-enableEventBars' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-cfg-enableEventBars' class='name expandable'>enableEventBars</a><span> : Boolean</span></div><div class='description'><div class='short'>True to enable the Ext.ux.TouchCalendarEvents plugin. ...</div><div class='long'><p>True to enable the <a href=\"#!/api/Ext.ux.TouchCalendarEvents\" rel=\"Ext.ux.TouchCalendarEvents\" class=\"docClass\">Ext.ux.TouchCalendarEvents</a> plugin. When true the <a href=\"#!/api/Ext.ux.TouchCalendarEvents\" rel=\"Ext.ux.TouchCalendarEvents\" class=\"docClass\">Ext.ux.TouchCalendarEvents</a> JS and CSS files\nmust be included and an eventStore option, containing an Ext.data.Store instance, be given to the viewConfig.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-enableSimpleEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendar' rel='Ext.ux.TouchCalendar' class='definedIn docClass'>Ext.ux.TouchCalendar</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-cfg-enableSimpleEvents' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-cfg-enableSimpleEvents' class='name expandable'>enableSimpleEvents</a><span> : Boolean</span></div><div class='description'><div class='short'>True to enable the Ext.ux.TouchCalendarSimpleEvents plugin. ...</div><div class='long'><p>True to enable the <a href=\"#!/api/Ext.ux.TouchCalendarSimpleEvents\" rel=\"Ext.ux.TouchCalendarSimpleEvents\" class=\"docClass\">Ext.ux.TouchCalendarSimpleEvents</a> plugin. When true the <a href=\"#!/api/Ext.ux.TouchCalendarSimpleEvents\" rel=\"Ext.ux.TouchCalendarSimpleEvents\" class=\"docClass\">Ext.ux.TouchCalendarSimpleEvents</a> JS and CSS files\nmust be included and an eventStore option, containing an Ext.data.Store instance, be given to the viewConfig.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-enableSwipeNavigate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendar' rel='Ext.ux.TouchCalendar' class='definedIn docClass'>Ext.ux.TouchCalendar</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-cfg-enableSwipeNavigate' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-cfg-enableSwipeNavigate' class='name expandable'>enableSwipeNavigate</a><span> : Boolean</span></div><div class='description'><div class='short'>True to allow the calendar's period to be change by swiping across it. ...</div><div class='long'><p>True to allow the calendar's period to be change by swiping across it.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-viewConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendar' rel='Ext.ux.TouchCalendar' class='definedIn docClass'>Ext.ux.TouchCalendar</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-cfg-viewConfig' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-cfg-viewConfig' class='name expandable'>viewConfig</a><span> : Object</span></div><div class='description'><div class='short'>A set of configuration options that will be applied to the TouchCalendarView component ...</div><div class='long'><p>A set of configuration options that will be applied to the TouchCalendarView component</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div id='m-property'><div class='definedBy'>Defined By</div><h3 class='members-title'>Properties</h3><div class='subsection'><div id='property-' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendar' rel='Ext.ux.TouchCalendar' class='definedIn docClass'>Ext.ux.TouchCalendar</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-property-' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-property-' class='name expandable'></a><span> : Object</span></div><div class='description'><div class='short'>@copyright      (c) 2011, by SwarmOnline.com\n@date           2nd November 2011\n@version        0.1\n@documentation\n@we...</div><div class='long'><p>@copyright      (c) 2011, by SwarmOnline.com\n@date           2nd November 2011\n@version        0.1\n@documentation<br/>\n@website            http://www.swarmonline.com</p>\n</div></div></div></div></div><div id='m-method'><div class='definedBy'>Defined By</div><h3 class='members-title'>Methods</h3><div class='subsection'><div id='method-afterRender' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendar' rel='Ext.ux.TouchCalendar' class='definedIn docClass'>Ext.ux.TouchCalendar</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-method-afterRender' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-method-afterRender' class='name expandable'>afterRender</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Override of the Ext.Carousel's afterRender method to enable/disable the swipe navigation if the enableSwipeNavigate o...</div><div class='long'><p>Override of the Ext.Carousel's afterRender method to enable/disable the swipe navigation if the enableSwipeNavigate option is set to true/false.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>undefined</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendar' rel='Ext.ux.TouchCalendar' class='definedIn docClass'>Ext.ux.TouchCalendar</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-method-getValue' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-method-getValue' class='name expandable'>getValue</a>( <span class='pre'></span> ) : Date</div><div class='description'><div class='short'>Returns the Date that is selected. ...</div><div class='long'><p>Returns the Date that is selected.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Date</span><div class='sub-desc'><p>The selected date</p>\n</div></li></ul></div></div></div><div id='method-onTableHeaderTap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendar' rel='Ext.ux.TouchCalendar' class='definedIn docClass'>Ext.ux.TouchCalendar</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-method-onTableHeaderTap' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-method-onTableHeaderTap' class='name expandable'>onTableHeaderTap</a>( <span class='pre'>Object e, Object el</span> )</div><div class='description'><div class='short'>Override for the TouchCalendarView's onTableHeaderTap method which is executed when the view's header (specificly the...</div><div class='long'><p>Override for the TouchCalendarView's onTableHeaderTap method which is executed when the view's header (specificly the arrows) is tapped.\nWhen using the TouchCalendar wrapper we must intercept it and use the carousel's prev/next methods to do the switching.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>el</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>undefined</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendar' rel='Ext.ux.TouchCalendar' class='definedIn docClass'>Ext.ux.TouchCalendar</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-method-setMode' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-method-setMode' class='name expandable'>setMode</a>( <span class='pre'>Object mode</span> ) : void</div><div class='description'><div class='short'>Changes the mode of the calendar to the specified string's value. ...</div><div class='long'><p>Changes the mode of the calendar to the specified string's value. Possible values are 'month', 'week' and 'day'.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mode</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendar' rel='Ext.ux.TouchCalendar' class='definedIn docClass'>Ext.ux.TouchCalendar</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-method-setValue' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-method-setValue' class='name expandable'>setValue</a>( <span class='pre'>Date v</span> ) : void</div><div class='description'><div class='short'>Set selected date. ...</div><div class='long'><p>Set selected date.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : Date<div class='sub-desc'><p>Date to select.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","requires":[],"alternateClassNames":[],"href":"Ext.ux.TouchCalendarEvents-all-min-debug.html#Ext-ux-TouchCalendar"});