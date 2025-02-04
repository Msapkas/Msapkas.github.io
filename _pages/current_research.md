---

title: "Current Research Interests"
permalink: /research/
layout: single
---

___________________

# AMD Xilinx Versal AI Engine

With the rise of Artificial Intelligence came also an ever increasing need to compute specialized tasks better, faster and more. To tackle the challenges that arise with this new type of workload, AMD Xilinx proposes the Versal Adaptive Computing Accelerating Platform (ACAP). A new accelerator module has been introduced, a 2D array of 400 tiles, the AI Engine, which moves away from the Von Neuman architecture by placing memory and vectorized cores in the same unit (tile). The tiles communicate with interconnects and memory sharing, and the whole Array can access PL resources via interfacing tiles. We explore the capabilities of the AI Engine for physics applications at the edge.

# Particle Flow for the CMS Trigger 

High Energy Physics experiments are a clear instance of extreme application for computing. They require the uttermost latency constraints and reliability. One suitable algorithm to run on the AI Engine is the CMS Triger Particle Flow, which aims to link together the physical objects seen by the subdetector systems. Until now, this task has been done in software in the High Level Trigger, at a rate of 100KHz, but with the phase 2 upgrade of CMS we are targeting to bring it at the timing of 40 MHz, the same pace as the collisions.

# A Gated Recurrent Unit implementation for the AI Engine

Physics experiments can greatly benefit from inference models, either for detection or for active control of the experiment itself. In collaboration with KIT IPE, we explored an approach to controlling a Synchrotron Light Source using Reinforcement Learning, leading to the implementation of a Gated Recurrent Unit in AI Engines. RNNs are perfect candidates for this specific task, since they work by distilling and compressing input information in their hidden state, which serves as memory. This way, we can feed small context windows of input observations to a lightweight model, very fast, respecting the memory and latency constraints of the problem.