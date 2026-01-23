type bingeablePointsText = {
    title : string,
    body : string
}

type bingeablePointsData = {
    image : string,
    content : bingeablePointsText
}

export const frontEndPoints : bingeablePointsData[] = [
    {
        image : '/2.png',
        content: {
                title : 'Day 0: Biological Mutiny - The Body That Fought Its Design',
                body : "Kulathummal Village, Kerala. 2001. Normal delivery for 47 seconds. Then silence fell across the delivery room. Right leg twisted, fused toward buttocks. Blue spinal mark stained his spine like spilled ink. Spina bifida lipomeningocele. Three kidneys. Neurogenic bladder. Survival odds: 23%. This wasn't birth - this was biological mutiny. The war between Syam and his own body had begun."
            }
    },
    {
        image : '/3.png',
        content : {
            title : 'Age 8: The Choice - Operation Room #7',
            body : "Chronic osteomyelitis climbed the deformed leg like poison ivy. Sepsis loomed. Doctors delivered the ultimatum: 'Keep the leg = guaranteed death by 12. Amputate above-knee = live without natural balance.' 8-year-old Syam stared at infection climbing his fused leg. Mother held his hand. 'Choose life,' she whispered. Surgeons cut. Chronic pain vanished instantly. Childhood balance disappeared forever. He chose to live."
        }
    },
    {
        image : '/5.png',
        content : {
            title : 'Age 22: Gravity Defied - 13,000ft World Record',
            body : "Post-transplant doctors said 'rest.' Society said 'safe hobbies.' Syam bought a ticket to Vadodara airfield. 4 hours wind tunnel training: asymmetric flight mastery, core-only stability, single-leg torque control. November 2023: 13,000ft solo jump, no prosthetic. International Book of Records certified. The boy who was never supposed to walk had made the sky his proving ground."
        }
    },
    {
        image : '/6.png',
        content : {
            title : 'Age 25: Sky Beyond Limits - 43,000ft Mission',
            body : "₹3.6 Crore mission. Squirrel Wingsuits (USA) engineering custom adaptive wingsuit with asymmetric drag compensation. Gen Robotics (India) developing hand-controlled flight prosthetic with neural interface. Three world records from 43,000+ feet: Altitude, Distance, Speed. 2026 France World Championship. Training window closes Q2 2026. History needs funding. The sky was never the limit - it was just the beginning."
        }
    }
]

export const backendData : bingeablePointsData[] = [
    {
        image : '/picture of syam_.jpg',
        content: {
                title : 'The Hospital Years: 1,247 Days by Age Five',
                body : "Syam's first five years belonged to antiseptic corridors, not playgrounds. Five major surgeries before kindergarten: spinal defect excision, bladder augmentation, testicular removal, structural stabilization (failed twice), kidney drainage. Catheterization every 2-3 hours to prevent sepsis. His parents learned medical terminology faster than nursery rhymes. Mother became nurse, advocate, warrior when hospitals failed."
            }
    },
    {
        image : '/picture of syam.jpg',
        content : {
            title : 'Kidney Apocalypse: 1,095 Dialysis Sessions',
            body : "Age 18-21: Duplex kidney failure led to end-stage renal disease. 1,095 dialysis sessions over 3 years. Energy vanished. Future shrank to 'next treatment.' 21 documented surgeries by age 21. Mother's kidney donation in 2022. Rejection episode at week 6 - he survived that too. Immunosuppressed for life. 'One infection kills me now,' he says matter-of-factly. Yet he earned scuba certification post-transplant."
        }
    },
    {
        image : '/hand stand on modeling_.jpg',
        content : {
            title : 'Earthbound Rebellion: Movement as Medicine',
            body : "The first prosthetic weighed 4.2kg - a torture device. Walking became performance art. Age 12: One-legged cycling breakthrough on Kerala roads. 250km Save Alappad campaign (12 hours, coastal erosion awareness). 1000+km endurance rides through Neyyattinkara hills. Kalaripayattu martial art became asymmetric balance training. School isolation, window-gazing during recess. Each pedal stroke drowned the 'freak' whispers."
        }
    },
    {
        image : '/cycling_.jpg',
        content : {
            title : 'Daily Reality: Age 25 - January 22, 2026',
            body : "05:30: Catheter + immunosuppressants. Scoliosis stretch. 06:30: Kalaripayattu core training. 10:00: Wind tunnel session (France prep). 14:00: Catheter + protein meal (kidney protection). 16:00: Partnership calls (Squirrel/Gen Robotics). 19:00: Mission Impossible motocross training. 22:00: Catheter + recovery. Mission visualization. Physical stats: 72kg, 11% body fat, VO2 max 48. The routine that keeps him alive to fly."
        }
    }
]