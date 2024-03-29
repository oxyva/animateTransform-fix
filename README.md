jQuery SVG animateTransform fix
===============================

Currently IE9 does support SVG but does not parse the 
animateTransform tag. Keith Wood has created a jQuery plugin
called jQuery SVG which allows you to apply the jQuery animate 
function on SVG elements (http://keith-wood.name/svg.html). 

jQuery SVG combined with this IEfix plugin allows IE9 to 
animate the elements with animateTransform of an inline SVG 
image.

Warning
=======

This library has been created for a specific project it is far from complete
in supporting the SVG animateTransform variations. Therefore this library is
in a pre-alpha state.

Support
=======

We currently only support the translate type and track the following parameters:
- dur
- begin
- to
- from
- type
- repeatCount

```xml
  <animateTransform
   id="animateTransform59"
   fill="freeze"
   dur="1s"
   begin="1s"
   to="0,1547.63782"
   from="0,607.63782"
   type="translate"
   attributeType="XML"
   attributeName="transform"
   repeatCount="indefinite" 
  />
```


License
=======

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later
version.

This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with
this program. If not, see <http://www.gnu.org/licenses/>.


Installation
============

You need the Keith Wood jQuery SVG plugin including the animation extension 
from http://keith-wood.name/svg.html and our IEfix plugin.