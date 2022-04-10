import React from 'react';

export default function Documentation() {
    return (
        <div>
            <div className="container-fluid documentation">
                <div className="row" style={{ gap: 50 }}>
                    <div className="col-md-3 col-xl-2 left-sidebar py-4 my-4 pr-2">
                        <h2 className="left-menu-title text-dark mb-4">
                            Documentation
                        </h2>
                        <ul className="left-menu">
                            <li className="my-4">
                                <a href="#Description">
                                    <h4>Description</h4>
                                </a>
                            </li>
                            <li className="my-4">
                                <a href="#Client-Server">
                                    <h4>Client Server</h4>
                                </a>
                            </li>
                            <li className="my-4">
                                <a href="#Client-Server-Modal">
                                    <h4>Client Server Modal</h4>
                                </a>
                            </li>
                            <li className="my-4">
                                <a href="#Page-Replacement">
                                    <h4>Page Replacement</h4>
                                </a>
                            </li>
                            <li className="my-4">
                                <a href="#Least-Recently-Used">
                                    <h4>Least Recently Used</h4>
                                </a>
                            </li>
                            <li className="my-4">
                                <a href="#Multithreading">
                                    <h4>Multithreading</h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-9 col-xl-9 main-panel bg-white">
                        <div className="main-panel-wrapper">
                            <h1 className="mt-4 text-center font-weight text-dark text-uppercase mb-4 pt-4">
                                Web based Client Server
                            </h1>
                            <h2 className="mt-4 text-center font-weight-light text-dark mb-4">
                                Operating Systems Lab – Project
                            </h2>
                            <div className="card grid">
                                <div className="card-body">
                                    <h3
                                        id="Description"
                                        className="mb-4 text-primary"
                                    >
                                        Description:
                                    </h3>
                                    <h4
                                        className="px-4"
                                        style={{
                                            lineHeight: 2,
                                            color: '#888'
                                        }}
                                    >
                                        We are making a web-based client server
                                        model for keeping covid-19 related data.
                                        This data will be sorted state wise and
                                        wave wise. In the backend part we are
                                        using page replacement for providing
                                        faster access to data(web pages),
                                        specifically Least Recently Used
                                        algorithm for our web pages. So, let us
                                        have a look at terminologies we are
                                        going to use.
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <h3
                                        id="Client-Server"
                                        className="mb-4 text-primary"
                                    >
                                        Client Server:
                                    </h3>
                                    <h4
                                        className="px-4"
                                        style={{
                                            lineHeight: 2,
                                            color: '#888'
                                        }}
                                    >
                                        A client-server is a popular software
                                        design architecture which, at an
                                        abstract level, breaks down a software
                                        into two parts: client-side and
                                        server-side.
                                        <ul className="my-4">
                                            <li>
                                                The client-side (or simply,
                                                client) is the application that
                                                runs on the end-user computer;
                                                it provides a user-interface
                                                (UI) that handles what the
                                                application feels and looks like
                                                and how it interacts with
                                                end-user. It may employ and
                                                consume resources on the user's
                                                machine (computing device) such
                                                as temporary and local storage,
                                                etc.
                                            </li>
                                            <li className="my-4">
                                                The server-side (or simply,
                                                server) is the application that
                                                receives requests from the
                                                clients, and contains the logic
                                                to send the appropriate data
                                                back to the client. Instead of
                                                user-interface, the server
                                                usually has an application
                                                programming interface (API).
                                                Moreover, the server often
                                                includes a database, which will
                                                persistently store all of the
                                                data for the application.
                                            </li>
                                        </ul>
                                        As long as your software application
                                        adheres to the client-server
                                        architecture (i.e. a client can send and
                                        receive data to an API on a server) you
                                        are free to build whatever user
                                        interface you want on whatever platform
                                        you want. This is advantageous as modern
                                        software application are expected to be
                                        available across multiple platforms and
                                        provide a consistent experience across
                                        devices.
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <h3
                                        id="Client-Server-Modal"
                                        className="mb-4 text-primary"
                                    >
                                        Client Server Modal:
                                    </h3>
                                    <img
                                        src="https://madooei.github.io/cs421_sp20_homepage/assets/client-server-2.png"
                                        alt="clien-server-example"
                                        width="800"
                                        height="600"
                                        style={{
                                            padding: '0px 0px 40px 120px'
                                        }}
                                    />
                                    <h4
                                        className="px-4"
                                        style={{
                                            lineHeight: 2,
                                            color: '#888'
                                        }}
                                    >
                                        The client-server model, or
                                        client-server architecture, is a
                                        distributed application framework
                                        dividing tasks between servers and
                                        clients, which either reside in the same
                                        system or communicate through a computer
                                        network or the Internet. The client
                                        relies on sending a request to another
                                        program in order to access a service
                                        made available by a server. The server
                                        runs one or more programs that share
                                        resources with and distribute work among
                                        clients. Client-server communication
                                        typically adheres to the TCP/IP protocol
                                        suite. TCP protocol maintains a
                                        connection until the client and server
                                        have completed the message exchange. TCP
                                        protocol determines the best way to
                                        distribute application data into packets
                                        that networks can deliver, transfers
                                        packets to and receives packets from the
                                        network, and manages flow control and
                                        retransmission of dropped or garbled
                                        packets. Client requests are organized
                                        and prioritized in a scheduling system,
                                        which helps servers cope in the instance
                                        of receiving requests from many distinct
                                        clients in a short space of time. The
                                        client-server approach enables any
                                        general-purpose computer to expand its
                                        capabilities by utilizing the shared
                                        resources of other hosts. Popular
                                        client-server applications include
                                        email, the World Wide Web, and network
                                        printing.
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <h3
                                        id="Page-Replacement"
                                        className="mb-4 text-primary"
                                    >
                                        Page Replacement:
                                    </h3>
                                    <h4
                                        className="px-4"
                                        style={{
                                            lineHeight: 2,
                                            color: '#888'
                                        }}
                                    >
                                        It is a procedure required when a
                                        required page is not found in main
                                        memory. So, a page in memory is replaced
                                        with a page from disk. There are many
                                        algorithms for this process like First
                                        In First Out, Optimal Page replacement,
                                        Least Recently Used(LRU), etc. We have
                                        used LRU in our project. In this
                                        algorithm new pages are replaced with
                                        the pages that have not been used for
                                        the longest time but staying in the
                                        memory.
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <h3
                                        id="Least-Recently-Used"
                                        className="mb-4 text-primary"
                                    >
                                        Least Recently Used:
                                    </h3>
                                    <h4
                                        className="px-4"
                                        style={{
                                            lineHeight: 2,
                                            color: '#888'
                                        }}
                                    >
                                        Least Recently Used (LRU) algorithm is
                                        used for memory management. According to
                                        this method, the page which is least
                                        recently used is replaced. Therefore, in
                                        memory, any page that has been unused
                                        for a longer period of time than the
                                        others is replaced.
                                        <br />
                                        This idea is somewhat based on locality
                                        of reference, that any page that has
                                        been unused for a great amount of time
                                        is more likely to remain unused.
                                        Therefore, it is better to replace that
                                        page.
                                    </h4>
                                </div>
                                <div className="card-body mb-4">
                                    <h3
                                        id="Multithreading"
                                        className="mb-4 text-primary"
                                    >
                                        Multithreading:
                                    </h3>
                                    <h4
                                        className="px-4"
                                        style={{
                                            lineHeight: 2,
                                            color: '#888'
                                        }}
                                    >
                                        Multithreading is a model of program
                                        execution that allows for multiple
                                        threads to be created within a process,
                                        executing independently but concurrently
                                        sharing process resources.
                                        <br />A thread is an independent unit of
                                        execution created within the context of
                                        a process (or application that is being
                                        executed). When multiple threads are
                                        executing in a process at the same time,
                                        we get the term “multithreading.” Think
                                        of it as the application’s version of
                                        multitasking.
                                        <br />
                                        <br />
                                        The main reason for incorporating
                                        threads into an application is to
                                        improve its performance.
                                        <ul className="mb-4 pt-2">
                                            <li className="mb-2">
                                                A web server will utilize
                                                multiple threads to simultaneous
                                                process requests for data at the
                                                same time.
                                            </li>
                                            <li className="my-2">
                                                An image analysis algorithm will
                                                spawn multiple threads at a time
                                                and segment an image into
                                                quadrants to apply filtering to
                                                the image.
                                            </li>
                                            <li className="my-2">
                                                A ray-tracing application will
                                                launch multiple threads to
                                                compute the visual effects while
                                                the main GUI thread draws the
                                                final results.
                                            </li>
                                        </ul>
                                        Performance can be expressed in multiple
                                        ways: Multithreading also leads to
                                        minimization and more efficient use of
                                        computing resources. Application
                                        responsiveness is improved as requests
                                        from one thread do not block requests
                                        from other threads. Additionally,
                                        multithreading is less
                                        resource-intensive than running multiple
                                        processes at the same time. There is
                                        much more overhead, time consumption,
                                        and management involved in creating
                                        processes as compared to creating and
                                        managing threads.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
