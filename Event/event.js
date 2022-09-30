const eventemit=require('events')
const event=new eventemit()

event.on("sayme",()=>{// listening an event
    console.log('one time called')
})
// listening multiple events
event.on("sayme",()=>{// listening an event
    console.log('second time called')
    })
event.on("sayme",()=>{// listening an event
    console.log('third time called')
    })

// mutiple event triggered by the same name.
event.emit('sayme')// event triggered


// you can call the event along with values

event.on('sayme2',(...args)=>{
    const [a,b]=args;
    console.log(a,b)
})
event.emit('sayme2',2000,'hey rohan')