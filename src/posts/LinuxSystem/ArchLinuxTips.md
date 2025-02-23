---
title: ArchLinux Tips
date: 2024-9-29 16:23:10
categories: LinuxSystem
cover: '/img/top-img/LinuxSystem/ArchLinuxInstall.png'
---

# ArchLinux 常见问题汇总

## 前言

此篇收集所有本人使用中遇到到小问题。

## 休眠后重启失败

### 现象与原因推测

将电脑挂起休眠后重新打开电源，会发现不能进入 `Hyprland` 界面，但是可以通过 `Ctrl+Alt+F3` 进入终端，证明系统没有问题。

查阅资料后得知是 `nvidia` 驱动的问题。

**可能是因为** `Hyprland` 在进入挂起模式后试图与 `nvidia` 通信，因此无法响应。`Linux` 尝试冻结任务，但失败了，因为 `Hyprland` 正在等待驱动程序的响应，无法冻结。

### 解决方案

参考官网链接：[Preserve video memory after suspend](https://wiki.archlinux.org/title/NVIDIA/Tips_and_tricks#Preserve_video_memory_after_suspend)

```bash
# 编辑 grub 文件
sudo vim /etc/default/grub
# 找到 GRUB_CMDLINE_LINUX，添加以下内容
GRUB_CMDLINE_LINUX="nvidia.NVreg_PreserveVideoMemoryAllocations=1"
# 更新 grub
sudo grub-mkconfig -o /boot/grub/grub.cfg
# tips 可以在 bashrc 中给这段更新代码设置一个别名：update-grub，方便之后使用
```

确保 `grub` 更新一定执行，并且没有报错。

```bash
# 按照官网链接进行设置
sudo systemctl enable nvidia-suspend.service
sudo systemctl enable nvidia-hibernate.service
sudo systemctl enable nvidia-resume.service
#重启
reboot
```

```bash
# 使用此代码检查是否设置成功，输出为 1 表示成功
sudo cat /proc/driver/nvidia/params | grep "PreserveVideoMemoryAllocations"
```

然后可以休眠然后重新开机测试是否成功。