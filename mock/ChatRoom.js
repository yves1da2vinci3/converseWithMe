const realisticData = [
    // Entry 1

    {
      id: '1',
      users: [
        { name: 'John Doe', imageUri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
        { name: 'Current User', imageUri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
      ],
      lastMessage: {
        createdAt: '2024-01-05T14:49:08.707+00:00',
        content: 'Hey, how are you?',
      },
    },
    // Entry 2
    {
      id: '2',
      users: [
        { name: 'Alice Johnson', imageUri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' },
        { name: 'Current User', imageUri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' },
      ],
      lastMessage: {
        createdAt: '2024-01-06T10:30:15.123+00:00',
        content: 'Good morning!',
      },
    },
    // Entry 3
    {
      id: '3',
      users: [
        { name: 'Bob Smith', imageUri: '' },
        { name: 'Current User', imageUri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
      ],
      lastMessage: {
        createdAt: '2024-01-07T18:45:00.987+00:00',
        content: 'What are your plans for the weekend?',
      },
    },
    // Entry 4
    {
      id: '4',
      users: [
        { name: 'Eva White', imageUri: 'https://example.com/eva-white.jpg' },
        { name: 'Current User', imageUri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
      ],
      lastMessage: {
        createdAt: '2024-01-08T21:12:30.456+00:00',
        content: "I'm looking forward to our meeting tomorrow.",
      },
    },
    // Entry 5
    {
      id: '5',
      users: [
        { name: 'Daniel Brown', imageUri: 'https://example.com/daniel-brown.jpg' },
        { name: 'Current User', imageUri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
      ],
      lastMessage: {
        createdAt: '2024-01-09T15:20:00.789+00:00',
        content: "Let's catch up soon!",
      },
    },
    // Entry 6
    {
      id: '6',
      users: [
        { name: 'Sophia Wilson', imageUri: 'https://example.com/sophia-wilson.jpg' },
        { name: 'Current User', imageUri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
      ],
      lastMessage: {
        createdAt: '2024-01-10T09:05:45.321+00:00',
        content: 'Thanks for your help yesterday.',
      },
    },
    // Entry 7
    {
      id: '7',
      users: [
        { name: 'Michael Davis', imageUri: 'https://example.com/michael-davis.jpg' },
        { name: 'Current User', imageUri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
      ],
      lastMessage: {
        createdAt: '2024-01-11T12:40:30.234+00:00',
        content: 'What do you think about the new project?',
      },
    },
    // Entry 8
    {
      id: '8',
      users: [
        { name: 'Olivia Harris', imageUri: 'https://example.com/olivia-harris.jpg' },
        { name: 'Current User', imageUri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
      ],
      lastMessage: {
        createdAt: '2024-01-12T17:55:15.678+00:00',
        content: "I'll be out of the office this afternoon.",
      },
    },
    // Entry 9
    {
      id: '9',
      users: [
        { name: 'William Lee', imageUri: 'https://example.com/william-lee.jpg' },
        { name: 'Current User', imageUri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
      ],
      lastMessage: {
        createdAt: '2024-01-13T19:30:00.567+00:00',
        content: 'Can you send me the latest report?',
      },
    },
    // Entry 10
    {
      id: '10',
      users: [
        { name: 'Emma Taylor', imageUri: 'https://example.com/emma-taylor.jpg' },
        { name: 'Current User', imageUri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
      ],
      lastMessage: {
        createdAt: '2024-01-14T08:15:45.890+00:00',
        content: 'Happy birthday! 🎉',
      },
    },
    // Entry 11
    {
      id: '11',
      users: [
        { name: 'James Johnson', imageUri: 'https://example.com/james-johnson.jpg' },
        { name: 'Current User', imageUri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
      ],
      lastMessage: {
        createdAt: '2024-01-15T14:05:30.123+00:00',
        content: "I'll be traveling next week.",
      },
    },
    // Entry 12
    {
      id: '12',
      users: [
        { name: 'Ava Moore', imageUri: 'https://example.com/ava-moore.jpg' },
        { name: 'Current User', imageUri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
      ],
      lastMessage: {
        createdAt: '2024-01-16T11:20:00.456+00:00',
        content: "Let's schedule a team meeting.",
      },
    },
    // Entry 13
    {
      id: '13',
      users: [
        { name: 'Jackson Adams', imageUri: 'https://example.com/jackson-adams.jpg' },
        { name: 'Current User', imageUri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
      ],
      lastMessage: {
        createdAt: '2024-01-17T16:45:30.789+00:00',
        content: 'Do you have any updates on the project?',
      },
    },
    // Entry 14
    {
      id: '14',
      users: [
        { name: 'Scarlett Turner', imageUri: 'https://example.com/scarlett-turner.jpg' },
        { name: 'Current User', imageUri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
      ],
      lastMessage: {
        createdAt: '2024-01-18T13:10:15.234+00:00',
        content: "I'll be working from home tomorrow.",
      },
    },
    // Add more entries as needed...
  ];
  
export default realisticData