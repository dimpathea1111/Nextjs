// import Modal from "../../modal";

// export default function PhotoModal({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <Modal>{children}</Modal>;
// }

import { Modal } from "../../modal";

export default async function PhotoModal(
  {params}:{params:Promise<{id:string}>}
) {
  const {id}=await params;
  return (
    <Modal>Hello {id}</Modal>
  )
}
