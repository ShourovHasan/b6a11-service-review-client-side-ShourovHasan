import React from 'react';
import useTitle from '../../hooks/useTitle';
import './Blog.css';


const Blog = () => {
    useTitle('Blog');
    return (
        <div className='mb-24'>
            <h2 className='mb-6 text-4xl text-center text-blue-600'>Ferquently Asked Questions</h2>
            <div className='flex justify-center mb-2'>
                
                <div className="w-2/3 border border-red-500 collapse rounded-xl">
                    <input type="checkbox" />
                    <div className="text-xl font-medium collapse-title">                    
                        <div className="form-control">
                            <label className="justify-start cursor-pointer label">
                                <input type="checkbox" checked className="checkbox checkbox-error" />                                
                                <p className='ml-3'>What are the differences between SQL and NoSQL?</p>
                            </label>
                        </div>
                    </div>
                    <div className="collapse-content">
                        <div className="shadow-xl card card-side bg-base-100">
                            <div className="card-body">                              
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>SQL databases are relational, NoSQL databases are non-relational.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>SQL databases use structured query language (SQL) for defining and manipulating data, NoSQL databases use various query languages.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>SQL databases are vertically scalable, NoSQL databases are horizontally scalable.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>SQL databases are table based, NoSQL databases can be document based, key-value pairs, graph databases, or column based.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>SQL databases are generally faster for relational data, NoSQL databases are generally faster for non-relational data.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>SQL databases are used when data is structured and predictable, NoSQL databases are used when data is unstructured and unpredictable.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>SQL databases are more rigid, NoSQL databases are more flexible.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>SQL databases are better for transactions and enforcing data integrity, NoSQL databases are better for analytics and reporting.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>SQL databases are more mature and have been around longer, NoSQL databases are newer and have been gaining popularity in recent years.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>There are more SQL database options available, while the NoSQL database options are more limited.</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>              

            </div>
            <div className='flex justify-center mb-2'>                
                <div className="w-2/3 border border-red-500 collapse rounded-xl">
                    <input type="checkbox" />
                    <div className="text-xl font-medium collapse-title">                    
                        <div className="form-control">
                            <label className="justify-start cursor-pointer label">
                                <input type="checkbox" checked className="checkbox checkbox-error" />                                
                                <p className='ml-3'>What is JWT? how does it works?</p>
                            </label>
                        </div>
                    </div>
                    <div className="collapse-content">
                        <div className="shadow-xl card card-side bg-base-100">
                            <div className="card-body">                              
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>JWT stands for JSON Web Token, and is a type of access token that is used to authenticate a user on a web application. It is a signed token that contains a JSON payload, and can be verified using a public key. <br />
                                        JWT is an authentication mechanism that allows you to verify the identity of a user without having to store their password in your database. When a user logs in, they provide their username and password. Your application then verifies the user's identity and generates a JWT. The JWT is then sent to the user's browser, and the user's browser sends the JWT back to your application with each request.
                                        </p>
                                    </label>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>              

            </div>      
            
            <div className='flex justify-center mb-2'>
                <div className="w-2/3 border border-red-500 collapse rounded-xl">
                    <input type="checkbox" />
                    <div className="text-xl font-medium collapse-title">
                        <div className="form-control">
                            <label className="justify-start cursor-pointer label">
                                <input type="checkbox" checked className="checkbox checkbox-error" />
                                <p className='ml-3'>What are the differences between javascript and NodeJS?</p>
                            </label>
                        </div>
                    </div>
                    <div className="collapse-content">
                        <div className="shadow-xl card card-side bg-base-100">
                            <div className="card-body">
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>Javascript is a client-side scripting language while NodeJS is a server-side scripting language.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>NodeJS is faster than Javascript as it is based on Google's V8 engine.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>NodeJS uses an event-driven, non-blocking I/O model which makes it light and efficient while Javascript uses a blocking I/O model.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>NodeJS applications are written in JavaScript while Javascript applications can be written in any language.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>NodeJS has a built-in library for HTTP requests while Javascript does not.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>NodeJS provides a REPL environment (Read-Eval-Print-Loop) for testing code while Javascript does not.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>NodeJS applications can be run on any operating system while Javascript applications can only be run on Windows.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>NodeJS has a package manager (npm) for installing and managing dependencies while Javascript does not.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>NodeJS applications are typically written in a single-threaded manner while Javascript applications can be written in a multi-threaded manner.</p>
                                    </label>
                                </div>
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>NodeJS uses an asynchronous programming model while Javascript uses a synchronous programming model.</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> 
            <div className='flex justify-center mb-2'>
                <div className="w-2/3 border border-red-500 collapse rounded-xl">
                    <input type="checkbox" />
                    <div className="text-xl font-medium collapse-title">
                        <div className="form-control">
                            <label className="justify-start cursor-pointer label">
                                <input type="checkbox" checked className="checkbox checkbox-error" />
                                <p className='ml-3'>How does NodeJS handle multiple requests at the same time?</p>
                            </label>
                        </div>
                    </div>
                    <div className="collapse-content">
                        <div className="shadow-xl card card-side bg-base-100">
                            <div className="card-body">
                                {/* points  */}
                                <div className="form-control">
                                    <label className="justify-start cursor-pointer label">
                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                        <p className='ml-3'>Node.js is built on the JavaScript runtime environment V8.This runtime environment allows Node.js to execute JavaScript code outside of a browser.When a Node.js program is run, the runtime environment starts up and initializes the program. <br />
                                        The runtime environment has a built-in mechanism for handling asynchronous events. When an asynchronous event occurs, the runtime environment will put the event on a queue. The Node.js program will then process the event when it is next able to do so.
                                        <br />
                                        This allows Node.js to handle multiple requests at the same time. When a request comes in, the runtime environment will add the request to the queue. The Node.js program will then process the request when it is next able to do so.

                                        </p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> 
        </div>
    );
};

export default Blog;