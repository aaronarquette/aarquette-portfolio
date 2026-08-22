import {
  BookA,
  BriefcaseBusiness,
  FileText,
  LibraryBig,
  ImageUp,
  ShoppingCart,
} from 'lucide-react'
import { RefAttributes } from 'react'

export type ValidIcons = 'book-a' | 'briefcase-business' | 'file-text' | 'library-big' | 'image-up' | 'shopping-cart'

export function IconDictionary({icon}:{icon: ValidIcons}) {
  const cleanedIconName = icon.split('-').map((key) => key.charAt(0).toUpperCase() + key.slice(1)).join("")

  const dictionary : {[key: string]: RefAttributes<SVGSVGElement>} = {
    BookA: <BookA />,
    BriefcaseBusiness: <BriefcaseBusiness />,
    FileText: <FileText />,
    LibraryBig: <LibraryBig />,
    ImageUp: <ImageUp />,
    ShoppingCart: <ShoppingCart />
  }
  
  return (
    <>
      {dictionary[cleanedIconName]}
    </>
  )
}