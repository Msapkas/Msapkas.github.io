---
title: "Research"
description: "Edge AI, FPGAs, and reinforcement learning for particle physics and accelerators"
layout: single
permalink: /research/
---

<div class="sj" markdown="0">

<section class="sj-hero">
  <p class="sj-eyebrow">Current research</p>
  <h1 class="sj-title">Machine learning <span class="sj-grad">at the edge of the detector</span></h1>
  <p>Physics experiments generate data faster than it can be stored. My work is about putting neural networks directly into the readout chain, on FPGAs and AI Engines, so that decisions are made in nanoseconds.</p>
</section>

<div class="sj-grid">
  <div class="sj-card sj-reveal">
    <span class="sj-kind">Hardware</span>
    <h3>GRU on the AMD Versal AI Engine</h3>
    <p>A Gated Recurrent Unit designed for latency-constrained inference on the VCK190. The design uses row-wise matrix-vector products, a hybrid AIE and programmable logic dataflow, and look-up tables for tanh and sigmoid.</p>
    <span class="sj-tag sj-tag--ok">Published, JINST 2026</span><span class="sj-tag">AIE</span><span class="sj-tag">RNN</span>
  </div>
  <div class="sj-card sj-reveal">
    <span class="sj-kind">Detector</span>
    <h3>1D CNN trigger for a CAEN digitizer</h3>
    <p>A three-layer CNN that flags particle hits in digitizer waveforms. It is converted to VHDL with HLS4ML at fixed-point precision, integrated with a 32-comparator hit-map output, and closes timing at 8&nbsp;ns with a 182-cycle latency.</p>
    <span class="sj-tag sj-tag--wip">In progress</span><span class="sj-tag">HLS4ML</span><span class="sj-tag">FPGA</span>
  </div>
  <div class="sj-card sj-reveal">
    <span class="sj-kind">Detector</span>
    <h3>Mini Drift Tubes muon telescope</h3>
    <p>Machine learning for muon tracking and timing (GRU and Transformer models), plus a time-to-digital pipeline on an Artix UltraScale+ FPGA with XDMA/PCIe readout, for the telescope mounted at the Padova Quantum Lab.</p>
    <span class="sj-tag sj-tag--wip">In progress</span><span class="sj-tag">TDC</span><span class="sj-tag">PCIe</span>
  </div>
  <div class="sj-card sj-reveal">
    <span class="sj-kind">Accelerators</span>
    <h3>Reinforcement learning for accelerators</h3>
    <p>Control of beam instabilities at the KARA synchrotron light source, with a small recurrent agent deployed on hardware. Presented at the RL4AA'26 collaboration workshop.</p>
    <span class="sj-tag">RL</span><span class="sj-tag">KARA</span>
  </div>
</div>

<h2>Why recurrent networks on AI Engines?</h2>

Recurrent networks are a natural fit for detector and control problems because they compress what they have seen into a hidden state. That state is also what makes them hard to accelerate: each step depends on the one before it. The AI Engine's vector processors and local memory let me spread those matrix-vector products across tiles, which keeps the latency low without quantizing the model.

!<a href="/assets/images/aie_array-min.png">The AI Engine array</a>
<div style="text-align: center; font-size: 15px; color: gray;"> A graphical representation of the AI Engine array. </div>

<h2>CMS Trigger Particle Flow</h2>

Particle Flow links the objects seen by the CMS sub-detectors. Today it runs in software in the High Level Trigger at about 100 kHz. With the Phase-2 upgrade the target is to run it at the 40 MHz collision rate, which makes it a strong candidate for hardware acceleration.

!<a href="/assets/images/pf_cms-min.png">Particle Flow in CMS</a>
<div style="text-align: center; font-size: 15px; color: gray;">
Particles that collide at the crossing of the proton beams create a shower that travels through the CMS sub-detectors. Image credit: CMS Open Data workshop.</div>

<div class="sj-grid">
  <div class="sj-card sj-reveal">
    <img src="/assets/images/gru-min.png" alt="GRU cell diagram" style="border-radius:12px">
    <p style="margin-top:.5rem">The Gated Recurrent Unit cell, the model at the heart of my AI Engine work. Image credit: ResearchGate.</p>
  </div>
  <div class="sj-card sj-reveal">
    <img src="/assets/images/poster_torino.png" alt="Conference poster" style="border-radius:12px">
    <p style="margin-top:.5rem">A poster from one of my recent presentations.</p>
  </div>
</div>

</div>
