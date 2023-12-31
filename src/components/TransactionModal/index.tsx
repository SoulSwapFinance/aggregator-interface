import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Link as ChakraLink,
	Text
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {} from 'react-feather';

export const TransactionModal = ({ open, setOpen, link }) => {
	return (
		<Modal
			isCentered
			motionPreset="slideInBottom"
			closeOnOverlayClick={true}
			isOpen={open}
			onClose={() => setOpen(false)}
		>
			<ModalOverlay 
				style={{
					background: "#A171FB"
				}}
			/>
			<ModalContent>
				<ModalCloseButton color="white" />
				<ModalBody 
					display="flex" 
					gap="8px" 
					flexDir="column" 
					alignItems="center" 
					marginY="4rem" 
					color="#A171FB"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="80"
						height="80"
						viewBox="0 0 24 24"
						fill="none"
						// stroke="currentColor"
						stroke="#A171FB"
						strokeWidth="0.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<polyline points="16 12 12 8 8 12"></polyline>
						<line x1="12" y1="16" x2="12" y2="8"></line>
					</svg>
					<Text as="h1" fontSize="xl" 
						fontWeight="600"
						color={"#A171FB"}
					>
						Transaction Submitted
					</Text>
				</ModalBody>

				<ChakraLink
					href={link}
					isExternal
					fontSize={'lg'}
					textAlign={'center'}
					padding="6px 1rem"
					borderRadius="0.375rem"
					bg="#A171FB"
					margin="0 1rem 1rem"
					color="white"
					_hover={{ textDecoration: 'none' }}
				>
					View on Explorer <ExternalLinkIcon mx="2px" />
				</ChakraLink>
			</ModalContent>
		</Modal>
	);
};
