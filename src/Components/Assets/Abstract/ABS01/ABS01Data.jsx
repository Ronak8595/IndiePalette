import Cane01 from "../ABS01/Cane01.png"
import Cane02 from "../ABS01/Cane02.png"
import Cylinder01 from "../ABS01/Cylinder01.png"
import Cylinder02 from "../ABS01/Cylinder02.png"
import Orange01 from "../ABS01/Orange01.png"
import Orange02 from "../ABS01/Orange02.png"
import Red01 from "../ABS01/Red01.png"
import Red02 from "../ABS01/Red02.png"
import White01 from "../ABS01/White01.png"
import White02 from "../ABS01/White02.png"
import DefaultDimensions from "../ABS01/DefaultDimensions.png"
import CylinderDimensions from "../ABS01/CylinderDimensions.png"


export const ABS01Data = [
    {   
        Style : "Red",
        OutletImage : Red01,
        Backgrounds : {
            bg01 : Red01,
            bg02 : Red02,
            bg03 : DefaultDimensions,
        }
    },
    {
        Style : "Cane",
        OutletImage : Cane01,
        Backgrounds : {
            bg01 : Cane01,
            bg02 : Cane02,
            bg03 : DefaultDimensions,
        }
    },
    {
        Style : "Cylinder",
        OutletImage : Cylinder01,
        Backgrounds : {
            bg01 : Cylinder01,
            bg02 : Cylinder02,
            bg03 : CylinderDimensions
        }
    },
    {
        Style : "Orange",
        OutletImage : Orange01,
        Backgrounds : {
            bg01 : Orange01,
            bg02 : Orange02,
            bg03 : DefaultDimensions
        }
    },
    {
        Style : "White",
        OutletImage : White01,
        Backgrounds : {
            bg01 : White01,
            bg02 : White02,
            bg03 : DefaultDimensions
        }
    },
]