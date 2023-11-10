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
      size={'md'}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 uppercase">
              {title}
            </ModalHeader>
            <ModalBody>
              <Stories
                stories={stories}
                defaultInterval={2000}
                width="100%"
                height="100%"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
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
