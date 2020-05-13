export type MediaFeature = {
  favorite: boolean,
  image: string,
  tag: string,
}

export type Card = MediaFeature & {
  title: string,
  details: string,
}

// TODO: make a better name
export type Label = {
  title: string,
  subTitle: string,
}

export type Training = Label & {
  icon: string,
}

