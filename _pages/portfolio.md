---
title: "Projects"
description: "Selected research, hardware and software projects"
layout: single
permalink: /portfolio/
---

<div class="sj" markdown="0">

<section class="sj-hero">
  <p class="sj-eyebrow">Portfolio</p>
  <h1 class="sj-title">Projects &amp; <span class="sj-grad">builds</span></h1>
  <p>Hardware, machine learning and physics projects, from FPGA firmware to reinforcement learning agents. Links go to papers, theses and code where they exist.</p>
</section>

<div class="sj-grid">
  <div class="sj-card sj-reveal">
    <span class="sj-tag sj-tag--ok">Published</span>
    <h3>Latency-constrained GRU on the Versal AI Engine</h3>
    <p>Custom workload distribution across AIE vector processors, with a hybrid AIE and PL design for real-time readout inference.</p>
    <p><a href="/publications/">Paper and proceedings &rarr;</a></p>
    <span class="sj-tag">AMD Versal</span><span class="sj-tag">RNN</span><span class="sj-tag">FPGA</span>
  </div>

  <div class="sj-card sj-reveal">
    <span class="sj-tag sj-tag--wip">In progress</span>
    <h3>CNN hit detection for a CAEN digitizer</h3>
    <p>Real-time 1D CNN for particle hit timing, converted with HLS4ML and packaged as a Vivado IP with an input buffer and a 32-bit hit-map output. Developed in collaboration with CAEN.</p>
    <span class="sj-tag">HLS4ML</span><span class="sj-tag">Vivado</span><span class="sj-tag">CNN</span>
  </div>

  <div class="sj-card sj-reveal">
    <span class="sj-tag sj-tag--wip">In progress</span>
    <h3>Mini Drift Tubes muon telescope</h3>
    <p>Machine learning inference for muon tracking and timing, and a TDC pipeline on an Artix UltraScale+ FPGA with DMA-over-PCIe readout.</p>
    <span class="sj-tag">TDC</span><span class="sj-tag">PCIe</span><span class="sj-tag">Transformer</span>
  </div>

  <div class="sj-card sj-reveal">
    <span class="sj-tag sj-tag--ok">Thesis</span>
    <h3>Beam control with fast RL inference at the edge</h3>
    <p>MSc thesis, carried out at KIT. A reinforcement learning agent controls the RF cavity at the KARA light source, with a GRU deployed on the AI Engine.</p>
    <p><a href="/assets/thesis/Sapkas_Michail_Beam_Control_with_Fast_Reinforcement_Learning_Inference_at_the_Edge.pdf" target="_blank">Read the thesis (PDF) &rarr;</a></p>
    <span class="sj-tag">RL</span><span class="sj-tag">KARA</span>
  </div>

  <div class="sj-card sj-reveal">
    <span class="sj-tag sj-tag--ok">Thesis</span>
    <h3>Gaussian beam tracing in underwater acoustics</h3>
    <p>BSc thesis. Theory and applications of Gaussian beam ray tracing, benchmarked against BELLHOP and KRAKEN on test cases including real-world data.</p>
    <p><a href="/assets/thesis/Gaussian%20Beam%20Tracing%20in%20Underwater%20Acoustics%20-%20Theory%20and%20Applications%20-%20Michail%20Sapkas.pdf" target="_blank">Read the thesis (PDF) &rarr;</a></p>
    <span class="sj-tag">Acoustics</span><span class="sj-tag">Physics</span>
  </div>

  <div class="sj-card sj-reveal">
    <span class="sj-tag sj-tag--ok">Done</span>
    <h3>Distributed computing with four Jetson Nanos</h3>
    <p>A demonstrator that spreads physics simulations (2D Ising model and a 1D particle chain) across four nodes using Dask.</p>
    <p><a href="https://github.com/Msapkas/Distributed-Computing-for-Physics-Simulation-and-Computation" target="_blank">Code on GitHub &rarr;</a></p>
    <span class="sj-tag">Dask</span><span class="sj-tag">HPC</span>
  </div>

  <div class="sj-card sj-reveal">
    <span class="sj-tag sj-tag--ok">Done</span>
    <h3>Reinforcement learning on the Lunar Lander</h3>
    <p>Comparison of DQN, DRQN (recurrent), DDPG and PPO agents on the Lunar Lander environment, including stability analyses over repeated runs.</p>
    <span class="sj-tag">DQN</span><span class="sj-tag">PPO</span><span class="sj-tag">DDPG</span><span class="sj-tag">DRQN</span>
  </div>

  <div class="sj-card sj-reveal">
    <span class="sj-tag sj-tag--ok">Done</span>
    <h3>Secure boot on the Versal VCK190</h3>
    <p>Boot-image signing and BBRAM key provisioning for the VCK190 platform, as a contract project with ThinkQuantum in Padova.</p>
    <span class="sj-tag">Security</span><span class="sj-tag">Versal</span>
  </div>

  <div class="sj-card sj-reveal">
    <span class="sj-tag sj-tag--wip">Up next</span>
    <h3>Neural reverb with tweakable weights</h3>
    <p>A neural network trained on dry samples to apply reverbs, with knobs that reshape the output sound by changing layer weights and biases.</p>
    <span class="sj-tag">Audio</span><span class="sj-tag">Neural nets</span>
  </div>

  <div class="sj-card sj-reveal">
    <span class="sj-tag sj-tag--wip">Up next</span>
    <h3>RL agent that plays a modular synth</h3>
    <p>An agent that patches sounds in VCV Rack, rewarded for patches that sound good.</p>
    <span class="sj-tag">RL</span><span class="sj-tag">Music</span>
  </div>
</div>

</div>
