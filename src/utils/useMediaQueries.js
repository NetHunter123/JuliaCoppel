import {useMediaQuery} from "@mantine/hooks";

export default function (type) {
  let size = ""


  if (type === "xs") {
    size = "455px"
  }
  if (type === "sm") {
    size = "640px"
  }
  if (type === "md") {
    size = "768px"
  }
  if (type === "lg") {
    size = "1024px"
  }
  if (type === "xl") {
    size = "1140px"
  }

  if (!isNaN(size)) {
    size = type
  }
  return useMediaQuery(`(min-width: ${size})`)
}
