const data = [
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('EARLY_SHIFT_830')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "EARLY_SHIFT_830",
        "crossMidnightAllowed": false,
        "externalName_defaultValue": "Early Shift",
        "workingHours": "8.5",
        "shiftClassification": "DY_EARLY",
        "timeRecordingVariant": "DURATION",
        "segments": {
            "results": []
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('LATE_SHIFT_730')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "LATE_SHIFT_730",
        "crossMidnightAllowed": false,
        "externalName_defaultValue": "Late Shift 7:30h",
        "workingHours": "7.5",
        "shiftClassification": "DY_LATE",
        "timeRecordingVariant": "DURATION",
        "segments": {
            "results": []
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('CLT_0800-1700')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "CLT_0800-1700",
        "crossMidnightAllowed": false,
        "externalName_defaultValue": "CLT - 08:00 - 17:00 w/ Breaks",
        "workingHours": "8",
        "shiftClassification": null,
        "timeRecordingVariant": "CLOCK_TIME",
        "segments": {
            "results": [
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='CLT_0800-1700',externalCode='1')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "1",
                    "WorkScheduleDayModel_externalCode": "CLT_0800-1700",
                    "duration": "540",
                    "startTime": "PT8H",
                    "endTime": "PT17H",
                    "category": "SCHEDULED_WORKING_TIME"
                },
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='CLT_0800-1700',externalCode='2')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "2",
                    "WorkScheduleDayModel_externalCode": "CLT_0800-1700",
                    "duration": "15",
                    "startTime": "PT10H",
                    "endTime": "PT10H15M",
                    "category": "SCHEDULED_UNPAID_BREAK"
                },
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='CLT_0800-1700',externalCode='3')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "3",
                    "WorkScheduleDayModel_externalCode": "CLT_0800-1700",
                    "duration": "45",
                    "startTime": "PT12H30M",
                    "endTime": "PT13H15M",
                    "category": "SCHEDULED_UNPAID_BREAK"
                }
            ]
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('CLT_0800-1700_NB')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "CLT_0800-1700_NB",
        "crossMidnightAllowed": false,
        "externalName_defaultValue": "CLT - 08:00 - 17:00 w/o Breaks",
        "workingHours": "9",
        "shiftClassification": null,
        "timeRecordingVariant": "CLOCK_TIME",
        "segments": {
            "results": [
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='CLT_0800-1700_NB',externalCode='1')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "1",
                    "WorkScheduleDayModel_externalCode": "CLT_0800-1700_NB",
                    "duration": "540",
                    "startTime": "PT8H",
                    "endTime": "PT17H",
                    "category": "SCHEDULED_WORKING_TIME"
                }
            ]
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('FLEX_6_19')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "FLEX_6_19",
        "crossMidnightAllowed": false,
        "externalName_defaultValue": "Flex 6:00-19:00",
        "workingHours": "8.5",
        "shiftClassification": null,
        "timeRecordingVariant": "CLOCK_TIME",
        "segments": {
            "results": [
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='FLEX_6_19',externalCode='1')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "1",
                    "WorkScheduleDayModel_externalCode": "FLEX_6_19",
                    "duration": "780",
                    "startTime": "PT6H",
                    "endTime": "PT19H",
                    "category": "FLEXTIME_BANDWIDTH"
                },
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='FLEX_6_19',externalCode='2')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "2",
                    "WorkScheduleDayModel_externalCode": "FLEX_6_19",
                    "duration": "510",
                    "startTime": "PT8H30M",
                    "endTime": "PT17H",
                    "category": "SCHEDULED_WORKING_TIME"
                }
            ]
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('Bandwdth_Non_Work')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "Bandwdth_Non_Work",
        "crossMidnightAllowed": false,
        "externalName_defaultValue": "Bandwidth Non Working Day",
        "workingHours": "0.0166666667",
        "shiftClassification": null,
        "timeRecordingVariant": "CLOCK_TIME",
        "segments": {
            "results": [
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='Bandwdth_Non_Work',externalCode='1')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "1",
                    "WorkScheduleDayModel_externalCode": "Bandwdth_Non_Work",
                    "duration": "1",
                    "startTime": "PT7H59M",
                    "endTime": "PT8H",
                    "category": "SCHEDULED_WORKING_TIME"
                },
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='Bandwdth_Non_Work',externalCode='2')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "2",
                    "WorkScheduleDayModel_externalCode": "Bandwdth_Non_Work",
                    "duration": "780",
                    "startTime": "PT6H",
                    "endTime": "PT19H",
                    "category": "FLEXTIME_BANDWIDTH"
                }
            ]
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('Cross_mn')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "Cross_mn",
        "crossMidnightAllowed": true,
        "externalName_defaultValue": "Cross Midnight",
        "workingHours": "8",
        "shiftClassification": "DY_LATE",
        "timeRecordingVariant": "CLOCK_TIME",
        "segments": {
            "results": [
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='Cross_mn',externalCode='1')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "1",
                    "WorkScheduleDayModel_externalCode": "Cross_mn",
                    "duration": "480",
                    "startTime": "PT22H",
                    "endTime": "PT6H",
                    "category": "SCHEDULED_WORKING_TIME"
                }
            ]
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('Early shift 7.30 AM')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "Early shift 7.30 AM",
        "crossMidnightAllowed": false,
        "externalName_defaultValue": "Early shift 7.30 AM",
        "workingHours": "8",
        "shiftClassification": "Early_Shift 7.30 AM",
        "timeRecordingVariant": "DURATION",
        "segments": {
            "results": []
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('2*2 Morning Shift')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "2*2 Morning Shift",
        "crossMidnightAllowed": false,
        "externalName_defaultValue": "2*2 Shift",
        "workingHours": "12",
        "shiftClassification": null,
        "timeRecordingVariant": "CLOCK_TIME",
        "segments": {
            "results": [
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='2*2 Morning Shift',externalCode='1')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "1",
                    "WorkScheduleDayModel_externalCode": "2*2 Morning Shift",
                    "duration": "720",
                    "startTime": "PT9H",
                    "endTime": "PT21H",
                    "category": "SCHEDULED_WORKING_TIME"
                }
            ]
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('3*3 Shift')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "3*3 Shift",
        "crossMidnightAllowed": false,
        "externalName_defaultValue": "3*3 Shift",
        "workingHours": "8",
        "shiftClassification": null,
        "timeRecordingVariant": "DURATION",
        "segments": {
            "results": []
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('2*2 Night Shift')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "2*2 Night Shift",
        "crossMidnightAllowed": true,
        "externalName_defaultValue": "2*2 Night Shift",
        "workingHours": "12",
        "shiftClassification": null,
        "timeRecordingVariant": "CLOCK_TIME",
        "segments": {
            "results": [
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='2*2 Night Shift',externalCode='1')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "1",
                    "WorkScheduleDayModel_externalCode": "2*2 Night Shift",
                    "duration": "720",
                    "startTime": "PT21H",
                    "endTime": "PT9H",
                    "category": "SCHEDULED_WORKING_TIME"
                }
            ]
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('001')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "001",
        "crossMidnightAllowed": false,
        "externalName_defaultValue": "Day Shift",
        "workingHours": "8",
        "shiftClassification": null,
        "timeRecordingVariant": "CLOCK_TIME",
        "segments": {
            "results": [
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='001',externalCode='1')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "1",
                    "WorkScheduleDayModel_externalCode": "001",
                    "duration": "480",
                    "startTime": "PT8H",
                    "endTime": "PT16H",
                    "category": "SCHEDULED_WORKING_TIME"
                }
            ]
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('002')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "002",
        "crossMidnightAllowed": true,
        "externalName_defaultValue": "3 Cycle B",
        "workingHours": "8",
        "shiftClassification": null,
        "timeRecordingVariant": "CLOCK_TIME",
        "segments": {
            "results": [
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='002',externalCode='1')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "1",
                    "WorkScheduleDayModel_externalCode": "002",
                    "duration": "480",
                    "startTime": "PT16H",
                    "endTime": "PT0S",
                    "category": "SCHEDULED_WORKING_TIME"
                }
            ]
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('091')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "091",
        "crossMidnightAllowed": true,
        "externalName_defaultValue": "Night Shift",
        "workingHours": "8",
        "shiftClassification": null,
        "timeRecordingVariant": "CLOCK_TIME",
        "segments": {
            "results": [
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='091',externalCode='1')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "1",
                    "WorkScheduleDayModel_externalCode": "091",
                    "duration": "480",
                    "startTime": "PT16H",
                    "endTime": "PT0S",
                    "category": "SCHEDULED_WORKING_TIME"
                }
            ]
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('000')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "000",
        "crossMidnightAllowed": true,
        "externalName_defaultValue": "Night Shift",
        "workingHours": "8",
        "shiftClassification": null,
        "timeRecordingVariant": "CLOCK_TIME",
        "segments": {
            "results": [
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='000',externalCode='1')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "1",
                    "WorkScheduleDayModel_externalCode": "000",
                    "duration": "480",
                    "startTime": "PT16H",
                    "endTime": "PT0S",
                    "category": "SCHEDULED_WORKING_TIME"
                }
            ]
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('080')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "080",
        "crossMidnightAllowed": true,
        "externalName_defaultValue": "Night Shift",
        "workingHours": "8",
        "shiftClassification": null,
        "timeRecordingVariant": "CLOCK_TIME",
        "segments": {
            "results": [
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='080',externalCode='1')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "1",
                    "WorkScheduleDayModel_externalCode": "080",
                    "duration": "480",
                    "startTime": "PT16H",
                    "endTime": "PT0S",
                    "category": "SCHEDULED_WORKING_TIME"
                }
            ]
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('090')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "090",
        "crossMidnightAllowed": true,
        "externalName_defaultValue": "Night Shift",
        "workingHours": "8",
        "shiftClassification": null,
        "timeRecordingVariant": "CLOCK_TIME",
        "segments": {
            "results": [
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='090',externalCode='1')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "1",
                    "WorkScheduleDayModel_externalCode": "090",
                    "duration": "480",
                    "startTime": "PT16H",
                    "endTime": "PT0S",
                    "category": "SCHEDULED_WORKING_TIME"
                }
            ]
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('34')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "34",
        "crossMidnightAllowed": false,
        "externalName_defaultValue": "Shift 2",
        "workingHours": "8",
        "shiftClassification": null,
        "timeRecordingVariant": "CLOCK_TIME",
        "segments": {
            "results": [
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='34',externalCode='1')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "1",
                    "WorkScheduleDayModel_externalCode": "34",
                    "duration": "480",
                    "startTime": "PT16H",
                    "endTime": "PT0S",
                    "category": "SCHEDULED_WORKING_TIME"
                }
            ]
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('123')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "123",
        "crossMidnightAllowed": false,
        "externalName_defaultValue": "Shift",
        "workingHours": "8",
        "shiftClassification": null,
        "timeRecordingVariant": "CLOCK_TIME",
        "segments": {
            "results": [
                {
                    "__metadata": {
                        "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModelSegment(WorkScheduleDayModel_externalCode='123',externalCode='1')",
                        "type": "SFOData.WorkScheduleDayModelSegment"
                    },
                    "externalCode": "1",
                    "WorkScheduleDayModel_externalCode": "123",
                    "duration": "480",
                    "startTime": "PT0S",
                    "endTime": "PT8H",
                    "category": "SCHEDULED_WORKING_TIME"
                }
            ]
        }
    },
    {
        "__metadata": {
            "uri": "https://apisalesdemo8.successfactors.com/odata/v2/WorkScheduleDayModel('OFF')",
            "type": "SFOData.WorkScheduleDayModel"
        },
        "externalCode": "OFF",
        "crossMidnightAllowed": false,
        "externalName_defaultValue": "OFF",
        "workingHours": "0",
        "shiftClassification": null,
        "timeRecordingVariant": "DURATION",
        "segments": {
            "results": []
        }
    }
];

// Map the data to a new array
const output = data.map(shift=>{

    // Map each segment of the shift to a new array
    const segments = shift.segments.results.map(segment=>{

        // Create an object for each segment
        const segmentEntry = {
            WorkScheduleDayModel_externalCode: segment.WorkScheduleDayModel_externalCode ?? "",
            externalCode: segment.externalCode ?? "",
            startTime: segment.startTime ?? "",
            endTime: segment.endTime ?? "",
            duration: segment.duration ?? 0,
            category: segment.category ?? ""
        };
        return segmentEntry;
    });

    // Create an object for each shift
    const shiftEntry = {
        externalCode: shift.externalCode ?? "",
        crossMidnightAllowed: shift.crossMidnightAllowed ?? "",
        externalName_defaultValue: shift.externalName_defaultValue ?? "",
        workingHours: shift.workingHours ?? "",
        shiftClassification: shift.shiftClassification ?? "",
        timeRecordingVariant: shift.timeRecordingVariant ?? "",
        Segments: segments
    };
    return shiftEntry;
});
// Return the output
return output;

console.log(output)