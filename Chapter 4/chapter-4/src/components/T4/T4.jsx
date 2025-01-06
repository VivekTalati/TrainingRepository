import React from 'react'
import { AllThemesProvider, useAllThemes } from './context/ThemeContext'
import './T4.css'
// import { ThemeProvider } from '../T2/context/ThemeContext'

const Content = () => {

    document.title = "All Theme's Website | Context"
    const { theme, toggleTheme } = useAllThemes()

    return (
        <>

            <div className='main-body'>


                <section id='header' style={theme}>
                    <div>
                        <ul id='navbar'>
                            <li><a href="/" className='active'>Home</a></li>
                            <li><a href="/">Shop</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>

                    <div className='toggle-container'>
                        <label className='switch'><h5>Select Theme:</h5>
                        </label>
                            <select onChange={(e) => toggleTheme(e.target.value)} >
                                {/* <optgroup label='SELECT'> */}
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                                <option value="blue">Light Blue</option>
                                <option value="red">Dark Red</option>
                                {/* </optgroup> */}
                            </select>
                    </div>

                    {/* <div className="toggle-container">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={isDarkMode}
                                onChange={toggleTheme}
                            />

                            <span className="slider round">
                            </span>
                            <span className="slider-text">
                                {isDarkMode ? "Dark Mode" : "Light Mode"}
                            </span>

                        </label>
                    </div> */}


                    {/* <button onClick={toggleTheme} className="theme-toggle-button">
{isDarkMode ? '☀️ Light Mode' : '🌑 Dark Mode'}
</button> */}

                </section>

                <section className="section" style={theme}>
                    <div className="box-main">
                        <div className="firstHalf">
                            <h1 className="text-big">
                                7 Best Tips To Speed Up Your Job
                                Search in 2022
                            </h1>
                            <p className="text-small">
                                Hunting down a relevant job
                                requires proper techniques for
                                showcasing your potential to the
                                employer. But with the advent of
                                COVID-19, it has become a bit
                                challenging and competitive to
                                reach out for your dream job.
                                Many individuals have lost their
                                jobs during these times, and on
                                the other hand, freshers are
                                facing difficulties while
                                applying for a new job. But
                                there is no need for panic, you
                                can change your ways and
                                streamline things in a way that
                                you get a proper result.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="section" style={theme}>
                    <div className="box-main">
                        <div className="secondHalf">
                            <h1 className="text-big" id="program">
                                JavaScript Tutorial
                            </h1>
                            <p className="text-small">
                                JavaScript is the world most
                                popular lightweight, interpreted
                                compiled programming language.
                                It is also known as scripting
                                language for web pages. It is
                                well-known for the development
                                of web page many non-browser
                                environments also use it.
                                JavaScript can be used for
                                Client-side developments as well
                                as Server-side developments.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="section" style={theme}>
                    <div className="box-main">
                        <div className="secondHalf">
                            <h1 className="text-big" id="program">
                                Java Programming Language
                            </h1>
                            <p className="text-small">
                                When compared with C++, Java
                                codes are generally more
                                maintainable because Java does
                                not allow many things which may
                                lead to bad/inefficient
                                programming if used incorrectly.
                                For example, non-primitives are
                                always references in Java. So we
                                cannot pass large objects (like
                                we can do in C++) to functions,
                                we always pass references in
                                Java. One more example, since
                                there are no pointers, bad
                                memory access is also not
                                possible. When compared with
                                Python, Java kind of fits
                                between C++ and Python. The
                                programs are written in Java
                                typically run faster than
                                corresponding Python programs
                                and slower than C++. Like C++,
                                Java does static type checking,
                                but Python does not.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="section" style={theme}>
                    <div className="box-main">
                        <div className="secondHalf">
                            <h1 className="text-big" id="program">
                                What is Machine Learning?
                            </h1>
                            <p className="text-small">
                                Machine Learning is the field of
                                study that gives computers the
                                capability to learn without
                                being explicitly programmed. ML
                                is one of the most exciting
                                technologies that one would have
                                ever come across. As it is
                                evident from the name, it gives
                                the computer that makes it more
                                similar to humans: The ability
                                to learn. Machine learning is
                                actively being used today,
                                perhaps in many more places than
                                one would expect.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

const T4 = () => {
    return (
        <>
            <AllThemesProvider>
                <Content/>
            </AllThemesProvider>
        </>
    )
}

export default T4
