document.addEventListener("DOMContentLoaded", function(event) {

  var w = window.innerWidth;
  var h = window.innerHeight;
  var r = Math.max(0.045*w,50);
  var eyeMargin=24;

  var svg = d3.select("body")
              .select(".eye")
              .append("svg")
              .attr("height", h)
              .attr("width", w)
              .append("g")
              .attr("transform", "translate(0,0)");

  var colorcircle=  svg.append("circle")
                      .attr("class", "colorcircle")
                      .attr("cx", w/2)
                      .attr("cy", h/2)
                      .attr("r", 0);


/*
     svg.append("svg:image")
        .attr("class", "eyeimage")
        .attr('x',w/2-0)
        .attr('y',h/2-0)
        .attr('width', 0)
        .attr('height', 0)
        .attr("xlink:href","images/eye.svg")
        .transition()
        .duration(2500)
        .attr('x',w/2-((2*r-eyeMargin)*.5))
        .attr('y',h/2-((2*r-eyeMargin)*.5))
        .attr('width', (2*r-eyeMargin))
        .attr('height', (2*r-eyeMargin));
*/
        svg.append("svg:image")
           .attr("class", "eyeimage")
           .attr('x',w/2-((2*r-eyeMargin)*.5))
           .attr('y',h/2-((2*r-eyeMargin)*.5))
           .attr('width', 0)
           .attr('height', 0)
           .attr("xlink:href","../shivas-eye/images/eye.svg")
           .transition()
           .duration(2500)
           .attr('width', (2*r-eyeMargin))
           .attr('height', (2*r-eyeMargin));
        svg.append("svg:image")
           .attr("class", "eyeimage")
           .attr('x',w/2+((2*r-eyeMargin)*.5))
           .attr('y',h/2-((2*r-eyeMargin)*.5))
           .attr('width', 0)
           .attr('height', 0)
           .attr("xlink:href","../shivas-eye/images/eye.svg")
           .transition()
           .duration(2500)
           .attr('x',w/2-((2*r-eyeMargin)*.5))
           .attr('y',h/2-((2*r-eyeMargin)*.5))
           .attr('width', (2*r-eyeMargin))
           .attr('height', (2*r-eyeMargin))
           .remove();
        svg.append("svg:image")
           .attr("class", "eyeimage")
           .attr('x',w/2+((2*r-eyeMargin)*.5))
           .attr('y',h/2+((2*r-eyeMargin)*.5))
           .attr('width', 0)
           .attr('height', 0)
           .attr("xlink:href","../shivas-eye/images/eye.svg")
           .transition()
           .duration(2500)
           .attr('x',w/2-((2*r-eyeMargin)*.5))
           .attr('y',h/2-((2*r-eyeMargin)*.5))
           .attr('width', (2*r-eyeMargin))
           .attr('height', (2*r-eyeMargin))
           .remove();
        svg.append("svg:image")
           .attr("class", "eyeimage")
           .attr('x',w/2-((2*r-eyeMargin)*.5))
           .attr('y',h/2+((2*r-eyeMargin)*.5))
           .attr('width', 0)
           .attr('height', 0)
           .attr("xlink:href","../shivas-eye/images/eye.svg")
           .transition()
           .duration(2500)
           .attr('x',w/2-((2*r-eyeMargin)*.5))
           .attr('y',h/2-((2*r-eyeMargin)*.5))
           .attr('width', (2*r-eyeMargin))
           .attr('height', (2*r-eyeMargin))
           .remove();
var c=0;
var recolor=function() { d3.select(".colorcircle")
                          .transition()
                          .duration(2000)
                          .delay(function(){c++; return c==1? 2500:0 ;})
                          .attr("r", r)
                          .attr("fill",function(d){return("rgb("+Math.round((Math.random()*127)+127)+","+Math.round((Math.random()*127)+127)+","+Math.round((Math.random()*127)+127)+")");})
                          .on("end", recolor);
                      };

recolor();
;})
