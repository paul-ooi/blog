const sitemapDateParts = (post) => {
  const date = post.data.publishedDate ?? post.date ?? Date.now();
  const month = (new Date(date).getMonth()) + 1
  const day = new Date(date).getUTCDate()
  const year = new Date(date).getFullYear()

  const dateParts = {
    day: ("0" + day).slice(-2),
    month: ("0" + month).slice(-2),
    year: year,
  }

  return `${dateParts.year}-${dateParts.month}-${dateParts.day}`;
}

module.exports = {
  sitemapDateParts
}