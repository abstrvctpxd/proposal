Project: UniCryptoPay
Version: 1.0
Date: 2026
Methodology: Agile + Incremental

1. Introduction
1.1 Purpose

This document defines functional and non-functional requirements for UniCryptoPay, a university-based cryptocurrency payment application.

1.2 Scope

UniCryptoPay enables:

Instant peer-to-peer payments

QR vendor payments

University-issued private tokens

Admin transaction monitoring

The system operates on a private Ethereum network using ERC-20 tokens.

2. Overall Description
2.1 Product Perspective

UniCryptoPay is a closed-loop campus financial ecosystem.

It integrates:

Mobile Application

Node.js Backend

MongoDB Database

Private Ethereum Network

Solidity Smart Contracts

3. Functional Requirements
3.1 User Registration

FR1: System shall allow registration using university email.

FR2: System shall generate a blockchain wallet per user.

FR3: System shall support 2FA authentication.

3.2 Wallet Management

FR4: Users shall view token balance.

FR5: Users shall view transaction history.

FR6: Users shall transfer tokens to another user.

3.3 QR Payments

FR7: Vendors shall generate payment QR codes.

FR8: Students shall scan QR codes to initiate payment.

FR9: System shall confirm transaction instantly.

3.4 Admin Controls

FR10: Admin shall mint tokens.

FR11: Admin shall freeze suspicious wallets.

FR12: Admin shall generate financial reports.

4. Non-Functional Requirements
4.1 Performance

Transactions must confirm within 3 seconds.

System supports 10,000 concurrent users.

4.2 Security

JWT authentication

2FA required for transfers above threshold

Encrypted private keys

Role-based access control

4.3 Availability

99% uptime target

4.4 Scalability

Modular microservice-ready architecture

5. Constraints

Must operate on private Ethereum network

Must comply with Kenyan financial guidelines

Campus-only token usage
