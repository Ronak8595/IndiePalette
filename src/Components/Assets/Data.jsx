import { AbstractData } from "./Abstract/AbstractData";
import { ForestData } from "./Forest/ForestData";
import { KidsData } from "./Kids/KidsData";
import { SpringData } from "./Spring/SpringData";
import { TextureData } from "./Texture/TextureData";
import { TraditionalData } from "./Traditional/TraditionalData";
import { TribalData } from "./Tribal/TribalData";

export const data = {
    Abstract: {
      title: "Abstract Collection",
      description: "Experience the harmony of form and function as these illuminating sculptures transform your environment into a gallery of contemporary brilliance. Illuminate your space with abstract art and embrace the boundless possibilities of artistic interpretation.",
      products: AbstractData,
    },
    Forest: {
      title: "Forest Collection",
      description: "Illuminate your surroundings with the warm, inviting glow that emanates from these exquisite creations. Let the Forest Art Lamp Collection transport you to a realm of tranquility and wonder, where nature's majesty is forever preserved in artful luminescence.",
      products: ForestData,
    },
    Kids: {
      title: "Kids Collection",
      description: "From whimsical animal-shaped lamps to dreamy nightlights adorned with stars and moon motifs, our Kids Collection of lamps adds a touch of magic and wonder to any space, creating a cozy ambiance that nurtures their imagination and brings bedtime stories to life.",
      products: KidsData,
    },
    Spring: {
      title: "Spring Collection",
      description: "Immerse yourself in a world of pastel hues, delicate florals, and flowing silhouettes, as our Spring Collection captures the essence of the season, celebrating renewal, joy, and the timeless allure of springtime fashion.",
      products: SpringData,
    },
    Texture: {
      title: "Texture Collection",
      description: "The interplay of light and shadow on the textured surfaces creates a stunning visual spectacle, casting unique patterns and enhancing the ambiance with a mesmerizing interplay of highlights and shadows.",
      products: TextureData,
    },
    Traditional: {
      title: "Traditional Collection",
      description: "With ornate details and rich, classic finishes, these lamps exude a sense of regal sophistication. Illuminate your space with the warm, inviting glow that emanates from these exquisite creations.",
      products: TraditionalData,
    },
    Tribal: {
      title: "Tribal Collection",
      description: "Tribal art, with its raw authenticity and primal aesthetics, serves as a window into the ancient cultures and traditions of indigenous communities around the world.",
      products: TribalData,
    },
  };
  