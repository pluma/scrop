module.exports = crop;

function crop(seq, length) {
  return seq.slice(0, length);
}

function rcrop(seq, length) {
  return seq.slice(seq.length - length);
}

crop.rcrop = rcrop;
crop.lcrop = crop;