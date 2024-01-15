import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqItems1 = [
    {
        Question:
            "1. Minsa, when will we get our LoA? Where will it be sent?",
        answer: "After we receive your registration, we will send a confirmation email within 1X24 hours, and for the LoA we will send it to the team leader's email address within 3X24 hours after registration.",
    },
    {
        question:
            "2. Minsa, I registered one week ago but how come I haven't received LoA and Invoice yet?",
        answer: "Try checking the spam folder in your team leader's email, maybe the email from the IYSA team went to the spam folder.",
    },
    {
        question: "3. Where do you upload the competition file, Minsa?",
        answer: "The drive link for uploading files and the link for uploading proof of payment will be included in the invoice. You will get an invoice like this",
    },
    {
        question:
            "4. I want to pay the registration fee but how come I cant find the invoice? and where is the payment transferred?",
        answer: "Have you read LoA to the end yet? Because we will send the invoice with your teams LoA, make sure you have read the email from us to the end! For payment, you can transfer to the account listed on the invoice. Make sure you pay according to the nominal stated on the invoice, okay!",
    },
    {
        question:
            "5. Minsa, Ive already paid the registration fee. Where can I upload the proof of payment?",
        answer: "If you have made a payment, you can upload the proof to the link listed on the invoice, and make sure you fill in and upload the proof of transfer correctly so that the committee can record it correctly too.",
    },
    {
        question: "6. When will the receipt be sent to us?",
        answer: "We will send a receipt for payment in a maximum of 7 working days to the team leaders email, after you have uploaded proof of payment!",
    },
    {
        question:
            "7. Minsa, one more week for judging, how come I have not received my teams presentation schedule yet?",
        answer: "We will send the online participant presentation schedule no later than 2 days before the judging takes place to the whatsapp group and also the team leaders email. Make sure you diligently check the information we provide on the Whatsapp group and also email!",
    },
];
faqItems2 = [
    {
        question:
            "1. When will the presentation schedule be given by the committee?",
        answer: "We will provide a presentation schedule no later than 2 days before the judging takes place or it could be earlier, and we will send it via the WA group and also the team leaders e-mail.",
    },
    {
        question:
            "2. What application used for online presentation? Zoom, Google Meet or something else?",
        answer: "For online judging, we always use the Zoom application and make sure your Zoom application is up to date.",
    },
    {
        question: "3. When will the zoom link be given by the committee?",
        answer: "We will provide a Zoom link on the judging day, and we will send it periodically to the group according to your teams presentation time.",
    },
    {
        question:
            "4. how many zoom accounts can join and what should i set my name",
        answer: "You can enter Zoom with a maximum of 5 accounts for participants, and all Zoom accounts must follow the name format that we have provided, namely 'Room Number_Team Leader Name_Institution Name'",
    },
    {
        question:
            "5. how long will the participants make the presentation?",
        answer: "You will be given 15 minutes for 1 presentation session which will be divided into 2, namely the initial 7 minutes for the presentation and the final 8 minutes for the question and answer session with the jury.",
    },
    {
        question:
            "6. How many judges will come to the offline participants booth?",
        answer: "Just like online judging, there will be 2 judges judging each team. And after being judged you will be given a sticker as a sign that your booth has been judged, make sure you get 2 stickers",
    },
    {
        question: "7. Can we tidy up our booth after being judged?",
        answer: "You can start tidying up the booth when all the teams have finished being judged, so if you have finished judging you can visit the booths of other participants first.",
    },
];
faqItems3 = [
    {
        question: "1. When will the winners be announced?",
        answer: "Announcement of winners is held on the last day of each event, you can check the date on the schedule listed in the Guide Book.",
    },
    {
        question: "2. Where can we see the winning results?",
        answer: "You can check the final results on the official website of the event you are participating in.",
    },
    {
        question: "3. When will the E-certificate be sent?",
        answer: "IYSA DOES NOT send E-Certificates to National participants or Indonesian Participants who take part in online events. Online National Participants will only receive a certificate in printed/hard form which will later be sent along with the medals via the JNE expedition.",
    },
    {
        question:
            "4. When is the online delivery of participant certificates?",
        answer: "The certificate will be sent no later than one month after the announcement of the winner. You can periodically check the delivery receipt that we sent on the Whatsapp group whether your certificate has been sent or not.",
    },
    {
        question: "5. Where can we get a supervisor certificate?",
        answer: "You can see and download the supervisor certificate on the official website of the event you are participating in.",
    },
    {
        question: "6. How to do medal doubling?",
        answer: "For offline participants, you can immediately duplicate the medals on the spot after the announcement of the winners takes place. And for online participants, you can duplicate the medals via the link we sent on the Whatsapp group, we will send duplicate information on the Whatsapp group no later than 2 days after the announcement of the winner.",
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
