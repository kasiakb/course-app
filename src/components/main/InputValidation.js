const properUrl = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g

export const validate = (values) => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  } else if (values.title.length > 50) {
    errors.title = 'Too long title'
  }
  if (!values.watchHref) {
    errors.watchHref = 'Required'
  } else if (values.watchHref.match(properUrl) == null) {
    errors.watchHref = "Wrong url format"
  }
  if (!values.category) {
    errors.category = 'Required'
  } 
  return errors
}

