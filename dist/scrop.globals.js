/*! scrop 0.1.1 Original author Alan Plum <me@pluma.io>. Released into the Public Domain under the UNLICENSE. @preserve */
(function(root){var require=function(key){return root[key];},module={};
module.exports = crop;

function crop(seq, length) {
  return seq.slice(0, length);
}

function rcrop(seq, length) {
  return seq.slice(seq.length - length);
}

crop.rcrop = rcrop;
crop.lcrop = crop;root.scrop = module.exports;}(this));
