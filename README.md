# Palindrome Checker

This repository contains a JavaScript implementation of a Palindrome Checker that utilizes stack and queue data structures to determine if a given word is a palindrome.

## What is a Palindrome?

A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). Examples of palindromic words include "radar", "level", and "racecar".

## How It Works

The Palindrome Checker in this repository uses two fundamental data structures: a stack and a queue. The algorithm follows these steps:

1. **Stack**: A stack is a data structure that follows the Last In First Out (LIFO) principle. We push each character of the word onto the stack.
2. **Queue**: A queue is a data structure that follows the First In First Out (FIFO) principle. We enqueue each character of the word into the queue.
3. **Comparison**: We then pop characters from the stack and dequeue characters from the queue and compare them. If all characters match, the word is a palindrome; otherwise, it is not.

## Getting Started

### Prerequisites

- A modern web browser
- Basic understanding of JavaScript

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/palindrome-checker.git
cd palindrome-checker
