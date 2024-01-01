import { FC } from 'react';
import { Story } from 'react-insta-stories/dist/interfaces';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';
import Stories from 'react-insta-stories';

interface StoriesModalProps {
  title: string;
  isOpen: boolean;
  onOpenChange: () => void;
  stories: Story[];
}

const StoriesModal: FC<StoriesModalProps> = ({
  title,
  isOpen,
  onOpenChange,
  stories,
}) => {
  return (
    <Modal
      placement="center"
      size={'sm'}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 uppercase">
              {title}
            </ModalHeader>
            <ModalBody className="flex justify-center items-center">
              <Stories
                stories={stories}
                defaultInterval={2000}
                width="92%"
                height="92%"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onClose}>
                Zamknij
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default StoriesModal;
