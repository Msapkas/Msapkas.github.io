---

title: "Portfolio"
permalink: /portfolio/
layout: single
---

# Portfolio

Future showcase of my work or projects here.

# Master Thesis

In the last years, the world has witnessed the rise of Artificial Intelligence technologies with the latest
being the Large Language models. The success of these models is attributed to the plentiful availability
of data and the computational power to train them. However, it is becoming increasingly clear that
scaling up the models will be the next big challenge of the field, since both data, computational power
and electricity resources are not infinite. Furthermore, AI on-the edge is gaining momentum as it is
very energy efficient and ensures data privacy by localised operation. Enter the next player in the
game, that promises data acquisition and processing on site, less power consumption and decoupling
cloud resources: custom hardware accelerators. Undoubtedly, the next era of AI will have to be
‘Hardware Aware’. That being said, scientific fields have to adapt and leverage the new tools available
and this thesis is a step towards that direction. A multidisciplinary approach is nowadays absolutely
necessary, as the field of AI is not only about algorithms and data, but also about hardware and
software.
This thesis follows my internship at the Institute for Data Processing and Electronics (IPE) at campus
North of the Karlsruhe Institute of Technology (KIT) were I had the opportunity to develop deep
learning models on the AMD Xilinx Versal AI Engine. During my stay at IPE, I was able to delve
into the work done by Michele Caselle’s group on trying to induce control of fast beam instabilities
at the Karlsruhe Research Accelerator (KARA) synchrotron light source and accelerator test facility.
I expanded my skillset and experience by working closely with Luca Scomparin and had the privilege
to explore their implementation of the project.
The project required understanding the the Versal platform and the AI Engine architecture. I was
needed to develop code in C++, Python, and Verilog. Also, I had to usage of Vitis and Vivado which
are the official development and simulation tools of AMD Xilinx and target their platforms. Moreover,
understanding the contex of the project such as the physics of the beam and the control system of the
KARA light source. Most importantly, the ability to understand and develop deep learning models in
the reinforcement learning framework that they are deployed in.

The goal of this thesis is to develop a Gated Recurrent Unit (GRU) model on the AI Engine. But in
order to reach that point, I will have to discuss: First, the context in which I will be using the GRU
model, which is the KARA synchrotron light source. Second, I will provide a brief overview of the
modern choices of hardware accelerators and how the Versal AI Engine fits in the picture, specifically
the VCK190 evaluation platform. Third, I will discuss the existing implementation of the AI Engine
and the modifications that were made during an actual deployment on KARA. Fourth, I will expand
on what is the AI Engine, how it is programmed and how it is controlled. Fifth, I will present the
custom testing tool that was developed in order to test the hardware and software. Finally, I will
introduce the GRU model and how it was implemented on the AI Engine.

# Bachelor Thesis

The idea of modeling waves as rays is not new. It has been thoroughly used as an effective approximation of optical light interacting with different media, as air to water refractions, and lenses. The propagation, refraction and reflection of radio waves in earth’s atmosphere have been calculated and understood with ray theory. The same applies for seismic waves travelling inside the earth, in which crucial information about the earth’s core and composition are revealed. Furthermore, Gaussian Beams are used in optical engineering to effectively model laser beams travelling in optical tables and interacting with equipment.
This thesis aims at presenting some general information about ray tracing modeling and its mathematical frameworks. First, the presentation of the basic concepts of underwater acoustics and modeling is in order. Afterwards, a brief heuristic approach of geometrical ray tracing will highlight the ideas and limitations of the theory and provide some initial intuition. Next, a more rigorous mathematical derivation will be presented that connects the geometrical intuition with a family of curves that are solutions of the wave equation and are normal to the wavefronts. These curves are effectively descriptions of the ray trajectories and described as a set of differential equations. I will conclude with the method of extending ray tracing applicability by converting rays to Gaussian Beams. Some computational aspects for calculating ray paths and the pressure field, and the treatment of boundaries, will be also included in the description.
By discretizing the problem into ray steps, highly complex range and depth dependence of the pressure field from the ocean waveguide can be computed with just a few basic principles, giving ray trace a computational advantage over more rigorous methods. On the other hand, ray tracing is inherently a high frequency approximation which offers its limitations. In some cases we can achieve excellent results, even in the low frequency domain, using the Gaussian Beams extension.
BELLHOP is a ray tracing program that operates by various file inputs and can output files that contain the ray paths, the pressure field and arrival times. I will benchmark BELLHOP with a normal mode program (KRAKEN) for three simple test cases and a fourth application that considers real data inputs and a more complex environment and comment on the results.