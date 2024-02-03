import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import PostShare from "../postShare/PostShare";

function ShareModal({ modalOpened, setModalOpened }) {
  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size="50 %"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {/* Modal content */}
        <PostShare />
      </Modal>
    </>
  );
}

export default ShareModal;
