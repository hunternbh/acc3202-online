<script setup>
import PanelView from "../components/PanelView.vue";

defineProps({
  panelTitle: {
    type: String,
    required: true
  }
});

const tabs = [
  {
    id: "lesson-9-tab-1",
    title: "Encryption Video Lesson",
    kind: "video",
    embedUrl: "",
    videoTitle: "Lesson 9 opening video",
    copy: "Learn how cryptography keeps financial data safe and secure. (Video link coming soon)",
    points: [
      "Encryption is the process of converting information into a secret code.",
      "Decryption is the process of converting that secret code back into readable information."
    ]
  },
  {
    id: "lesson-9-tab-2",
    title: "Symmetric vs. Asymmetric",
    kind: "text",
    paragraphs: [
      "There are two main types of encryption: symmetric and asymmetric. Symmetric encryption uses the same key for both encryption and decryption. Think of it like a shared password. It is fast and efficient, but the challenge is securely sharing the key with the other party.",
      "Asymmetric encryption, also known as public-key cryptography, uses a pair of keys: a public key and a private key. Information encrypted with the public key can only be decrypted with the corresponding private key. This solves the key-sharing problem because the public key can be shared openly."
    ],
    points: [
      "Symmetric: One key for both encryption and decryption.",
      "Asymmetric: A pair of keys (public and private).",
      "Public Key: Shared with everyone; used for encryption.",
      "Private Key: Kept secret; used for decryption."
    ],
    quiz: {
      prompt: "In asymmetric encryption, which key is used to decrypt the data?",
      choices: ["The Public Key", "The Private Key", "Either key can be used"],
      answer: 1
    }
  },
  {
    id: "lesson-9-tab-3",
    title: "Digital Signatures",
    kind: "text",
    paragraphs: [
      "A digital signature is a mathematical technique used to validate the authenticity and integrity of a digital document, message, or software. It is essentially the digital version of a handwritten signature or a stamped seal, but far more secure.",
      "Digital signatures use asymmetric encryption in reverse. A sender signs a document using their private key, and the receiver verifies the signature using the sender's public key. If the signature is valid, the receiver knows the document was not tampered with and truly came from the sender."
    ],
    points: [
      "Authenticity: Proves who the sender is.",
      "Integrity: Proves the message hasn't been changed.",
      "Non-repudiation: The sender cannot deny sending the message."
    ],
    quiz: {
      prompt: "What does a valid digital signature guarantee about a message?",
      choices: ["That it is encrypted and cannot be read", "That it has not been altered and came from the claimed sender", "That it will be delivered instantly"],
      answer: 1
    }
  },
  {
    id: "lesson-9-tab-4",
    title: "Securing Accounting Data",
    kind: "text",
    paragraphs: [
      "For accountants, encryption is a critical tool for protecting sensitive client information, financial statements, and audit workpapers. When data is 'at rest' (stored on a hard drive) or 'in transit' (being sent over the internet), it should be encrypted.",
      "Without encryption, if a laptop is stolen or a network is intercepted, the data is wide open for anyone to see. By using strong encryption protocols (like AES or RSA), we ensure that even if the data falls into the wrong hands, it remains unreadable and useless to the attacker."
    ],
    points: [
      "Data at Rest: Stored data (e.g., databases, files).",
      "Data in Transit: Data moving over a network (e.g., email, web traffic).",
      "AES (Advanced Encryption Standard): A common symmetric encryption standard."
    ],
    quiz: {
      prompt: "When should sensitive financial data be encrypted?",
      choices: ["Only when it is stored on a server", "Only when it is being sent over the internet", "Both when it is stored and when it is being transmitted"],
      answer: 2
    }
  },
  {
    id: "lesson-9-tab-5",
    title: "Student Reminders",
    kind: "text",
    paragraphs: [
      "Understanding encryption is vital for maintaining professional ethics and protecting your organization. It's a key part of your responsibility as a modern accountant.",
      "Keep an eye on the calendar. Connect homework for these topics is due July 21!"
    ],
    points: [
      "Connect Homework: Due 21 July, Sunday, 2359.",
      "SQL Individual Project 1: Due 12 August, 2359."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>
